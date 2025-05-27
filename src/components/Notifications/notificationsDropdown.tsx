import { useEffect, useState } from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { ref, onValue, update, getDatabase } from "firebase/database";
import { app } from "../../config/FirebaseConfig"; // Ensure the correct path to FirebaseConfig
import NotificationsIcon from "@mui/icons-material/Notifications";
import './styles/notification.css'
interface Notification {
  consultation_id: string;
  expert_id: number;
  user_id: number;
  message: string;
  read: boolean;
  timestamp: number;
}

const NotificationDropdown: React.FC<{ userId: number; userRole: string }> = ({ userId, userRole }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const database = getDatabase(app);

  // Fetch notifications for the current user
  useEffect(() => {
    const notificationsRef = ref(database, "notifications");

    onValue(notificationsRef, (snapshot) => {
      const data = snapshot.val();
      const notificationsArray: Notification[] = [];
      let unread = 0;

      for (const id in data) { // Using 'const' here
        const notification = data[id];

        // Ensure user_id and expert_id are used properly based on user role
        if (userRole === "Expert" && notification.expert_id === userId) {
          notificationsArray.push(notification);
          if (!notification.read) unread++;
        } else if (userRole !== "Expert" && notification.user_id === userId) {
          notificationsArray.push(notification);
          if (!notification.read) unread++;
        }
      }

      setNotifications(notificationsArray);
      setUnreadCount(unread);
    });
  }, [userId, userRole, database]);

  // Mark notification as read
  const markAsRead = (notificationId: string) => {
    const notificationRef = ref(database, `notifications/${notificationId}`);
    update(notificationRef, { read: true }).then(() => {
      setUnreadCount((prev) => prev - 1); // Decrease unread count
    });
  };

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="link" className="text-white nav-link">
          <NotificationsIcon />
        {unreadCount > 0 && (
          <Badge pill bg="danger" style={{ position: "absolute", top: "0", right: "0", fontSize: "0.75rem" }}>
            {unreadCount}
          </Badge>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText className="text-center">
          <strong>Thông Báo</strong>
        </Dropdown.ItemText>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Dropdown.Item
              key={notification.timestamp}
              as="button"
              onClick={() => markAsRead(notification.timestamp.toString())} // Ensure the timestamp is used as a string
              className={!notification.read ? "bg-light" : ""}
            >
              {notification.message}
              {!notification.read && <Badge bg="danger" className="ms-2">Mới</Badge>}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item as="button" disabled>
            Không có thông báo mới.
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
