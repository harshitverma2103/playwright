import {test , expect} from '@playwright/test';

// test('test1' , async({page}) => {
//      console.log('test 1')
// })
// skip
// test.skip('test2' , async({page}) => {
//      console.log('test2')
// })
 //only
// test.only('test3' , async({page , browserName}) => {
//      console.log('test3')
//      if(browserName == 'chromium')
//      {
//           test.skip();
//      } else {
//           console.log('no browser')
//           console.log(browserName);
//      }
// })

//fail

// test('test4' , async({page , browserName}) => {
//      if(browserName == 'chromium'){
//           test.fail();
//           console.log('browser not found');
          
//      } else {
//           console.log('passed')
//      }
// })

// fixme

// test('test5' , async({page})=>{
//      test.fixme();
//      console.log('test5')
// })
