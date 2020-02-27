let HID = require('node-hid');


let VENDOR_ID = 0x0D62;
let PRODUCT_ID = 0x910E;

console.log(HID.devices())


let hidDevice = new HID.HID(VENDOR_ID, PRODUCT_ID);

hidDevice.on("data", function(data) {
  console.log(data);
});