import React, { useState, useEffect } from 'react';
import { IconButton, Typography, Box, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ChatArea from './chatArea';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { database } from '../../config/FirebaseConfig';
import { remove, ref } from 'firebase/database';
import { useNotification } from '../../services/NotificationServices';
import { useNavigate } from 'react-router-dom';
const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [spamLock, setSpamLock] = useState<boolean>(false);
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [conversationList, setConversationList] = useState<number[]>(
    () => JSON.parse(localStorage.getItem("conversationList") || "[1]")
  );
  const [activeConversationId, setActiveConversationId] = useState<number>(
    () => parseInt(localStorage.getItem("activeConversationId") || "1")
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIdToDelete, setSelectedIdToDelete] = useState<number | null>(null);
  const [menuChatId, setMenuChatId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("conversationList", JSON.stringify(conversationList));
  }, [conversationList]);

  useEffect(() => {
    localStorage.setItem("activeConversationId", activeConversationId.toString());
  }, [activeConversationId]);

  const toggleSidebar = () => setOpen(!open);

  const handleNewChatClick = () => {
    if (spamLock) {
      showNotification("Vui lòng chờ trước khi tạo đoạn chat mới.", "warning");
      return;
    }

    setSpamLock(true);
    setTimeout(() => setSpamLock(false), 5000);

    if (conversationList.length < 10) {
      const newId = Math.max(...conversationList) + 1;
      const updatedList = [...conversationList, newId];
      setConversationList(updatedList);
      setActiveConversationId(newId);
      showNotification(`Tạo đoạn chat ${newId} thành công!`, "success");
    } else {
      showNotification("Bạn chỉ có thể tạo tối đa 10 đoạn chat.", "info");
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIdToDelete(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIdToDelete(null);
  };

  const handleDeleteConversation = async () => {
    if (selectedIdToDelete === null) return;
    const id = selectedIdToDelete;
    handleMenuClose();

    try {
      const conversationRef = ref(database, `ChatbotHistory/${id}`);
      await remove(conversationRef);

      const updatedList = conversationList.filter((c) => c !== id);
      setConversationList(updatedList);

      if (id === activeConversationId && updatedList.length > 0) {
        setActiveConversationId(updatedList[0]);
      } else if (updatedList.length === 0) {
        setConversationList([1]);
        setActiveConversationId(1);
      }

      showNotification(`Đã xóa đoạn chat ${id}`, "success");
    } catch (error) {
      console.error('Lỗi khi xóa đoạn chat:', error);
      showNotification("Không thể xóa đoạn chat. Vui lòng thử lại sau.", "error");
    }
  };

  return (
    <>
      <div style={{ display: 'flex', position: 'fixed', top: '60px', left: '10px', zIndex: '1' }}>
        <IconButton onClick={toggleSidebar} sx={{ borderRadius: '10px' }}>
          <MenuIcon />
        </IconButton>
        <div style={{ fontWeight: '600', marginTop: '7px' }}>FuturePath Ai</div>
      </div>
      <div
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          width: '250px',
          height: '100vh',
          backgroundColor: '#F5F5F5',
          color: '#212529',
          padding: '20px',
          transition: 'transform 0.3s ease-in-out',
          transform: open ? 'translateX(0)' : 'translateX(-250px)',
          zIndex: 1000,
          overflowY: 'auto'
        }}
      >
        <div className="Sidebar-onclick">
          <IconButton onClick={toggleSidebar} color="inherit" sx={{ borderRadius: '10px', marginLeft: '-10px' }}>
            <MenuIcon sx={{ color: '#999999' }} />
          </IconButton>
          <IconButton sx={{ marginLeft: '140px', borderRadius: '10px', color: '#999999' }}>
            <DriveFileRenameOutlineIcon />
          </IconButton>
        </div>
        <IconButton
          sx={{
            borderRadius: '10px',
            marginLeft: '-10px',
            fontSize: '13px',
            display: 'flex',
            border: '10px',
            paddingRight: '100px',
            marginTop: '10px',
          }}
          onClick={handleNewChatClick}
        >
          <img
            src='../../../public/cat.png'
            alt="FuturePath Ai"
            style={{ width: '17%', height: 'auto', maxWidth: '100px', marginRight: '10px', marginLeft: '-20px' }}
          />
          New Chat
        </IconButton>
        <IconButton
  sx={{
    borderRadius: '10px',
    marginLeft: '-10px',
    fontSize: '13px',
    display: 'flex',
    border: '10px',
    paddingRight: '100px',
    marginTop: '-5px',
  }}
  onClick={() => navigate('/careerform')}
>
  <img
    src="../../../public/analyst.webp"
    alt="FuturePath Ai"
    style={{
      width: '17%',
      height: 'auto',
      maxWidth: '100px',
      marginRight: '10px',
      marginLeft: '-5px',
      borderRadius: '10px',
    }}
  />
  Phân tích AI
</IconButton>
        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginTop: '20px' }}>History</Typography>
        {conversationList.map((id) => (
          <Box
            key={id}
            onMouseEnter={() => setMenuChatId(id)}
            onMouseLeave={() => setMenuChatId(null)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '8px',
              marginTop: '5px',
              backgroundColor: id === activeConversationId ? '#d3f3f6' : 'transparent',
              '&:hover': { backgroundColor: '#f0f0f0' },
              fontSize:'14px',
              fontWeight:'600'
            }}
          >
            <span  onClick={() => {
    setActiveConversationId(id);
    window.location.reload(); 
  }}>Đoạn chat {id}</span>

            <div style={{ visibility: menuChatId === id ? 'visible' : 'hidden' }}>
              <IconButton
                size="small"
                onClick={(e) => handleMenuOpen(e, id)}
                sx={{ padding: '4px' }}
              >
                <MoreHorizIcon fontSize="small" />
              </IconButton>
            </div>
          </Box>
        ))}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleDeleteConversation} sx={{ color: 'red' }}>Xóa</MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: '#0D6EFD' }}>Hủy</MenuItem>
        </Menu>
      </div>

      <div
        style={{
          marginLeft: open ? '250px' : '0',
          transition: 'margin-left 0.3s ease-in-out',
          paddingLeft: '20px',
          width: open ? 'calc(100% - 550px)' : '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ padding: 2 }}>
          <ChatArea conversationId={activeConversationId} />
        </Typography>
      </div>
    </>
  );
};

export default Sidebar;
