import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

interface AuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon?: 'person' | 'mail' | 'lock';
  showToggle?: boolean;
  onToggle?: () => void;
  showPassword?: boolean;
}

export const AuthInput = ({ type, placeholder, value, onChange, required = true, icon, showToggle, onToggle, showPassword }: AuthInputProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'person':
        return <PersonIcon style={{ fontSize: '18px' }} />;
      case 'mail':
        return <MailIcon style={{ fontSize: '18px' }} />;
      case 'lock':
        return showPassword ? <LockOpenIcon style={{ fontSize: '18px' }} /> : <LockIcon style={{ fontSize: '18px' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="input-wrapper">
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
      <div className="input-icon" onClick={onToggle} style={{ cursor: showToggle ? 'pointer' : 'default' }}>
        {renderIcon()}
      </div>
    </div>
  );
};
