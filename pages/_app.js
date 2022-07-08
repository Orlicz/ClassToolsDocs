import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// my add
function getDom(value){
  var selectDom = [];
  var dom=document.getElementsByClassName("hidden md:block")[0].getElementsByTagName('button');
  for (var i=0; i<dom.length; i++) {
      if(value===dom[i].innerText){
          selectDom.push(dom[i]);
      }
  }
  return selectDom;
}
getDom('默认')[0].click()