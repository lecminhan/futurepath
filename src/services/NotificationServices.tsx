import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface Notification {
  message: string;
  type: AlertColor;
  open: boolean;
}

interface NotificationContextType {
  showNotification: (message: string, type?: AlertColor) => void;
}

const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {}
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<Notification>({
    message: '',
    type: 'success',
    open: false
  });

  const showNotification = (message: string, type: AlertColor = 'success') => {
    setNotification({ message, type, open: true });
  };

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={notification.type} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
