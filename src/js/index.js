// Import vendors
import './vendor/foundation';

import { navigation } from './navigation';

// Import application sass styles
import '../styles/sass/style.scss';

// Import foundation css
import '../styles/sass/vendors/foundation.scss';
import '../styles/sass/vendors/app.scss';

$(document).ready(function() {
  navigation();
});
