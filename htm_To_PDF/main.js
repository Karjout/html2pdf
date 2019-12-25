//include this in your Project
const addScript =(url)=>{
    let script =document.createElement('script');
    script.type='application/javascript';
    script.src=url;
    document.head.appendChild(script);

}
addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');
//for executing the function
const Convert_to_Html=()=>{
    html2pdf(document.body);  
};
