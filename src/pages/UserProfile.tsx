import { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import {
  User, DollarSign, Wallet, Edit, ChevronRight,
  Shield, Bell, Settings, CreditCard, ArrowUpRight, ArrowDownRight,
  X, Check, Lock, AlignJustify
} from "lucide-react";
import "../styles/user-profile.css";

type UserProfile = {
  id: string;
  full_name: string;
  age: number;
  dob: string;
  phone: string;
  account_balance: number;
  email: string;
  avatar?: string;
  address?: string;
  transactions?: {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'credit' | 'debit';
  }[];
};

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('profile');

  // Edit mode states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<UserProfile> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Placeholder image URL
  const placeholderImage =
   "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        // In a real app, replace this with an actual API call
        // Example: const response = await fetch(`/api/users/${userId}`);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock data for demonstration
        const mockUser: UserProfile = {
          id: userId || "USR12345",
          full_name: "Alexander Johnson",
          age: 32,
          dob: "1991-05-15",
          phone: "+1 (555) 123-4567",
          account_balance: 24850.75,
          email: "alexander.johnson@example.com",
          avatar: placeholderImage,
          address: "123 Financial District, New York, NY 10004",
          transactions: [
            {
              id: "TRX001",
              date: "2023-11-15",
              description: "Salary Deposit",
              amount: 3500.00,
              type: 'credit'
            },
            {
              id: "TRX002",
              date: "2023-11-14",
              description: "Grocery Shopping",
              amount: 125.30,
              type: 'debit'
            },
            {
              id: "TRX003",
              date: "2023-11-10",
              description: "Investment Return",
              amount: 780.50,
              type: 'credit'
            },
            {
              id: "TRX004",
              date: "2023-11-08",
              description: "Monthly Rent",
              amount: 1800.00,
              type: 'debit'
            },
            {
              id: "TRX005",
              date: "2023-11-05",
              description: "Freelance Payment",
              amount: 950.00,
              type: 'credit'
            }
          ]
        };

        setUser(mockUser);

        // Check if this is the current logged-in user
        // In a real app, you would compare with the authenticated user's ID
        setIsCurrentUser(userId === "USR12345");
      } catch (err) {
        setError("Failed to load user profile");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const openEditModal = () => {
    if (!user) return;
    setEditFormData({...user});
    setIsEditModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData(null);
    setSaveError(null);
    document.body.style.overflow = 'auto';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditFormData(prev => prev ? {...prev, [name]: value} : null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!editFormData) return;

    setIsSaving(true);
    setSaveError(null);

    try {
      // In a real app, make an API call to update the user profile
      // Example: await fetch(`/api/users/${userId}`, { method: 'PUT', body: JSON.stringify(editFormData) });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the local state with the edited data
      setUser(editFormData as UserProfile);
      closeEditModal();
    } catch (err) {
      console.error("Failed to save profile:", err);
      setSaveError("Failed to save changes. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  if (isLoading) {
    return (
      <div className="profile-page">
        <NavBar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading profile data...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="profile-page">
        <NavBar />
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error || "User not found"}</p>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <NavBar />

      <div className="profile-dashboard">
        {/* Mobile menu toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileSidebar}>
          <AlignJustify size={24} />
          <span>Menu</span>
        </button>

        {/* Sidebar */}
        <div className={`profile-sidebar ${isMobileSidebarOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-user-info">
            <div className="sidebar-avatar-container">
              <img
                src={user.avatar || placeholderImage}
                alt={user.full_name}
                className="sidebar-avatar"
              />
            </div>
            <h3 className="sidebar-username">{user.full_name}</h3>
            <p className="sidebar-user-id">ID: {user.id}</p>
          </div>

          <div className="sidebar-menu">
            <button
              className={`sidebar-menu-item ${activeSidebarItem === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveSidebarItem('profile')}
            >
              <User size={20} />
              <span>Profile</span>
            </button>

            <button
              className={`sidebar-menu-item ${activeSidebarItem === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveSidebarItem('financial')}
            >
              <Wallet size={20} />
              <span>Financial Overview</span>
            </button>

            <button
              className={`sidebar-menu-item ${activeSidebarItem === 'security' ? 'active' : ''}`}
              onClick={() => setActiveSidebarItem('security')}
            >
              <Shield size={20} />
              <span>Security</span>
            </button>

            <button
              className={`sidebar-menu-item ${activeSidebarItem === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveSidebarItem('notifications')}
            >
              <Bell size={20} />
              <span>Notifications</span>
            </button>

            <button
              className={`sidebar-menu-item ${activeSidebarItem === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveSidebarItem('settings')}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>

        </div>

        {/* Main Content Area */}
        <div className="profile-content">
          {/* Profile Section */}
          {activeSidebarItem === 'profile' && (
            <div className="content-section">
              <div className="section-header">
                {isCurrentUser && (
                  <button className="edit-button" onClick={openEditModal}>
                    <Edit size={18} />
                    <span>Edit</span>
                  </button>
                )}
              </div>

              <div className="profile-card">
                <div className="profile-info-grid">
                  <div className="info-item">
                    <div className="info-label">Full Name</div>
                    <div className="info-value">{user.full_name}</div>
                  </div>

                  <div className="info-item">
                    <div className="info-label">User ID</div>
                    <div className="info-value">{user.id}</div>
                  </div>

                  <div className="info-item">
                    <div className="info-label">Age</div>
                    <div className="info-value">{user.age} years</div>
                  </div>

                  <div className="info-item">
                    <div className="info-label">Date of Birth</div>
                    <div className="info-value">{formatDate(user.dob)}</div>
                  </div>

                  <div className="info-item">
                    <div className="info-label">Phone Number</div>
                    <div className="info-value">{user.phone}</div>
                  </div>

                  <div className="info-item">
                    <div className="info-label">Email Address</div>
                    <div className="info-value">{user.email}</div>
                  </div>

                  {user.address && (
                    <div className="info-item full-width">
                      <div className="info-label">Address</div>
                      <div className="info-value">{user.address}</div>
                    </div>
                  )}
                </div>
              </div>

 

              <div className="finance-summary-card">
                <div className="balance-display">
                  <div className="balance-label">Current Balance</div>
                  <div className="balance-amount">{formatCurrency(user.account_balance)}</div>
                </div>

                <div className="account-actions">
                  <button className="account-action-btn deposit">
                    <DollarSign size={18} />
                    Deposit
                  </button>
                  <button className="account-action-btn withdraw">
                    <ArrowUpRight size={18} />
                    Transfer
                  </button>
                  <button className="account-action-btn statements">
                    <CreditCard size={18} />
                    Statements
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Financial Section */}
          {activeSidebarItem === 'financial' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Financial Overview</h2>
              </div>

              <div className="finance-summary-card highlight">
                <div className="balance-display">
                  <div className="balance-label">Available Balance</div>
                  <div className="balance-amount">{formatCurrency(user.account_balance)}</div>
                </div>
              </div>

              <div className="section-header">
                <h2>Recent Transactions</h2>
              </div>

              <div className="transactions-card">
                <div className="transactions-list">
                  {user.transactions?.map((transaction) => (
                    <div key={transaction.id} className="transaction-item">
                      <div className="transaction-icon-container">
                        {transaction.type === 'credit' ? (
                          <ArrowDownRight size={20} className="transaction-icon credit" />
                        ) : (
                          <ArrowUpRight size={20} className="transaction-icon debit" />
                        )}
                      </div>

                      <div className="transaction-details">
                        <div className="transaction-description">{transaction.description}</div>
                        <div className="transaction-date">{formatDate(transaction.date)}</div>
                      </div>

                      <div className={`transaction-amount ${transaction.type}`}>
                        {transaction.type === 'credit' ? '+ ' : '- '}
                        {formatCurrency(transaction.amount)}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="view-all-button">
                  <span>View All Transactions</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Other sections would be implemented similarly */}
          {activeSidebarItem === 'security' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Security Settings</h2>
              </div>

              <div className="placeholder-content">
                <Lock size={48} />
                <p>Security settings would be displayed here</p>
              </div>
            </div>
          )}

          {activeSidebarItem === 'notifications' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Notification Preferences</h2>
              </div>

              <div className="placeholder-content">
                <Bell size={48} />
                <p>Notification settings would be displayed here</p>
              </div>
            </div>
          )}

          {activeSidebarItem === 'settings' && (
            <div className="content-section">
              <div className="section-header">
                <h2>Account Settings</h2>
              </div>

              <div className="placeholder-content">
                <Settings size={48} />
                <p>Account settings would be displayed here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && editFormData && (
        <div className="modal-overlay">
          <div className="edit-profile-modal">
            <div className="modal-header">
              <h2>Edit Profile Information</h2>
              <button className="close-modal-button" onClick={closeEditModal}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-scrollable-content">
              {saveError && (
                <div className="error-message">
                  <X size={18} />
                  {saveError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="form-group">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={editFormData.full_name || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={editFormData.age || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={editFormData.dob || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={editFormData.phone || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editFormData.email || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={editFormData.address || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-note">
                  <p>Note: User ID and account balance cannot be modified directly.</p>
                </div>
              </form>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-button"
                onClick={closeEditModal}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                type="button"
                className="save-button"
                onClick={handleSubmit}
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <div className="button-spinner"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Check size={18} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
