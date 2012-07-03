/*
***** BEGIN LICENSE BLOCK *****
Version: MPL 1.1/GPL 2.0/LGPL 2.1

The contents of this file are subject to the Mozilla Public License Version
1.1 (the "License"); you may not use this file except in compliance with
the License. You may obtain a copy of the License at
http://www.mozilla.org/MPL/

Software distributed under the License is distributed on an "AS IS" basis,
WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
for the specific language governing rights and limitations under the
License.

The Original Code is the Attachemnt Encoding Detector.

The Initial Developer of the Original Code is ClearCode Inc.
Portions created by the Initial Developer are Copyright (C) 2012 ClearCode Inc.
the Initial Developer. All Rights Reserved.

Contributor(s): YUKI "SHIMODA" Hiroshi <shimoda@clear-code.com>

Alternatively, the contents of this file may be used under the terms of
either the GNU General Public License Version 2 or later (the "GPL"), or
the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
in which case the provisions of the GPL or the LGPL are applicable instead
of those above. If you wish to allow use of your version of this file only
under the terms of either the GPL or the LGPL, and not to allow others to
use your version of this file under the terms of the MPL, indicate your
decision by deleting the provisions above and replace them with the notice
and other provisions required by the GPL or the LGPL. If you do not delete
the provisions above, a recipient may use your version of this file under
the terms of any one of the MPL, the GPL or the LGPL.

***** END LICENSE BLOCK *****
*/

var Cc = Components.classes;
var Ci = Components.interfaces;

Components.utils.import('resource://gre/modules/XPCOMUtils.jsm');

function LocalizedDetector() {
  var detector = Cc['@mozilla.org/preferences;1']
                   .getService(Ci.nsIPrefBranch)
                   .getCharPref('intl.charset.detector');
  return Cc['@mozilla.org/intl/charsetdetect;1?type=' + detector]
           .getService(Ci.nsISupports);
}
LocalizedDetector.prototype = {
  contractID: '@mozilla.org/intl/charsetdetect;1?type=universal_charset_detector',
  classDescription: 'UniversalCharsetDetector',
  classID: Components.ID('{75c97b40-c02f-11e1-afa7-0800200c9a66}'),
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIFactory])
};
LocalizedDetector.createInstance = function(aOuter, aIID) {
  if (aOuter != null)
    throw Components.results.NS_ERROR_NO_AGGREGATION;
  return (new this()).QueryInterface(aIID);
};

var NSGetFactory = LocalizedDetector;

/*
Components.manager.QueryInterface(Ci.nsIComponentRegistrar)
  .registerFactory(
    LocalizedDetector.prototype.classID,
    LocalizedDetector.prototype.classDescription,
    LocalizedDetector.prototype.contractID,
    LocalizedDetector
  );
*/
