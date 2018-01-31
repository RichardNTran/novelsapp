
import { Platform } from 'react-native';

const platform = Platform.OS;

export default {
// Tabs


// Text
textColor: '#555',

// Color
brandPrimary: '#473BE7',
brandInfo: '#62B1F6',
brandSuccess: '#5cb85c',
brandDanger: '#d9534f',
brandWarning: '#f0ad4e',
brandSidebar: '#252932',
brandDark: '#000',
brandLight: '#f4f4f4',

// Font
fontFamily: platform === 'ios' ? 'System' : 'Roboto',
fontSizeBase: 15
};

