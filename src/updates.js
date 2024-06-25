import bellbell from './assets/bellbell.png'
import imagelogo1 from './assets/imagelogo1.png'
import imagelogo2 from './assets/imagelogo2.png'
import imagelogo3 from './assets/imagelogo3.png'
import imagelogo4 from './assets/imagelogo4.png'
import factGif from './assets/fact.gif'
import mythGif from './assets/myth.gif'
import spell from './assets/spell-book.png'
import search from './assets/search.png'

const updates = () => {

    let updatesection= document.getElementById("updates");

    let updateall=document.createElement("div");
    updateall.classList.add("updates-container");
    updateall.classList.add("Updater-properties");
    updatesection.appendChild(updateall);
    
    let updatehead=document.createElement("div");
    updatehead.classList.add("update-heading-withbell")
    updateall.appendChild(updatehead);
    let head=document.createElement("h1");
    head.classList.add("head");
    head.textContent="Update";
    updatehead.appendChild(head);
    let bell=document.createElement("img");
    bell.src=bellbell;
    bell.classList.add("bell-img");
    updatehead.appendChild(bell);
    
    
    
    let update=document.createElement("div");
    update.classList.add("updates-container");
    update.classList.add("Update-layer-properties");
    updateall.appendChild(update);
    
    
    
    let updateplusedata=document.createElement("div");
    updateplusedata.classList.add("update-plus-data");
    update.appendChild(updateplusedata);
    
    let data=document.createElement("div");
    data.classList.add("data");
    updateplusedata.appendChild(data);
    
    
    let logo1=document.createElement("div");
    data.appendChild(logo1);
    logo1.classList.add("logo-set");
    let imgdiv1=document.createElement("div");
    logo1.appendChild(imgdiv1);
    let decdiv1=document.createElement("div");
    logo1.appendChild(decdiv1);
    
    let image1=document.createElement("img");
    image1.src=imagelogo1;
    image1.classList.add("image");
    imgdiv1.appendChild(image1);
    
    let head1=document.createElement("h1");
    head1.textContent="Blog";
    head1.classList.add("heading-update");
    decdiv1.appendChild(head1);
    
    let para1=document.createElement("p");
    para1.textContent="Avoid corruption to avoid risk your reputation ...";
    para1.classList.add("para-update");
    decdiv1.appendChild(para1);
    
    
    let logo2=document.createElement("div");
    data.appendChild(logo2);
    logo2.classList.add("logo-set");
    let imgdiv2=document.createElement("div");
    logo2.appendChild(imgdiv2);
    let decdiv2=document.createElement("div");
    logo2.appendChild(decdiv2);
    
    let image2=document.createElement("img");
    image2.src=imagelogo2;
    image2.classList.add("image");
    imgdiv2.appendChild(image2);
    
    let head2=document.createElement("h1");
    head2.textContent="New Article";
    head2.classList.add("heading-update");
    decdiv2.appendChild(head2);
    
    let para2=document.createElement("p");
    para2.textContent="Maximize your tax savings by following  tips ...";
    para2.classList.add("para-update");
    decdiv2.appendChild(para2);
    
    
    let logo3=document.createElement("div");
    data.appendChild(logo3);
    logo3.classList.add("logo-set");
    let imgdiv3=document.createElement("div");
    logo3.appendChild(imgdiv3);
    let decdiv3=document.createElement("div");
    logo3.appendChild(decdiv3);
    
    let image3=document.createElement("img");
    image3.src=imagelogo3;
    image3.classList.add("image");
    imgdiv3.appendChild(image3);
    
    let head3=document.createElement("h1");
    head3.textContent="Analyzing the effects";
    head3.classList.add("heading-update");
    decdiv3.appendChild(head3);
    
    let para3=document.createElement("p");
    para3.textContent="The impact of increasing tax in your daily life ....";
    para3.classList.add("para-update");
    decdiv3.appendChild(para3);
    
    
    let logo4=document.createElement("div");
    data.appendChild(logo4);
    logo4.classList.add("logo-set");
    let imgdiv4=document.createElement("div");
    logo4.appendChild(imgdiv4);
    let decdiv4=document.createElement("div");
    logo4.appendChild(decdiv4);
    
    let image4=document.createElement("img");
    image4.src=imagelogo4;
    image4.classList.add("image");
    imgdiv4.appendChild(image4);
    
    let head4=document.createElement("h1");
    head4.textContent="New Update";
    head4.classList.add("heading-update");
    decdiv4.appendChild(head4);
    
    let para4=document.createElement("p");
    para4.textContent="Know about India AS Overview ...";
    para4.classList.add("para-update");
    decdiv4.appendChild(para4);
    
    
    let logo5=document.createElement("div");
    data.appendChild(logo5);
    logo5.classList.add("logo-set");
    let imgdiv5=document.createElement("div");
    logo5.appendChild(imgdiv5);
    let decdiv5=document.createElement("div");
    logo5.appendChild(decdiv5);
    
    let image5=document.createElement("img");
    image5.src=imagelogo1;
    image5.classList.add("image");
    imgdiv5.appendChild(image5);
    
    let head5=document.createElement("h1");
    head5.textContent="Blog";
    head5.classList.add("heading-update");
    decdiv5.appendChild(head5);
    
    let para5=document.createElement("p");
    para5.textContent="Avoid corruption to avoid risk your reputation ...";
    para5.classList.add("para-update");
    decdiv5.appendChild(para5);
    
    let logo6=document.createElement("div");
    data.appendChild(logo6);
    logo6.classList.add("logo-set");
    let imgdiv6=document.createElement("div");
    logo6.appendChild(imgdiv6);
    let decdiv6=document.createElement("div");
    logo6.appendChild(decdiv6);
    
    let image6=document.createElement("img");
    image6.src=imagelogo2;
    image6.classList.add("image");
    imgdiv6.appendChild(image6);
    
    let head6=document.createElement("h1");
    head6.textContent="Analyzing the effects";
    head6.classList.add("heading-update");
    decdiv6.appendChild(head6);
    
    let para6=document.createElement("p");
    para6.textContent="The impact of increasing tax in your daily life ....";
    para6.classList.add("para-update");
    decdiv6.appendChild(para6);
    
    
    let logo7=document.createElement("div");
    data.appendChild(logo7);
    logo7.classList.add("logo-set");
    let imgdiv7=document.createElement("div");
    logo7.appendChild(imgdiv7);
    let decdiv7=document.createElement("div");
    logo7.appendChild(decdiv7);
    
    let image7=document.createElement("img");
    image7.src=imagelogo3;
    image7.classList.add("image");
    imgdiv7.appendChild(image7);
    
    let head7=document.createElement("h1");
    head7.textContent="New Update";
    head7.classList.add("heading-update");
    decdiv7.appendChild(head7);
    
    let para7=document.createElement("p");
    para7.textContent="Know about India AS Overview ...";
    para7.classList.add("para-update");
    decdiv7.appendChild(para7);
    
    
    let logo8=document.createElement("div");
    data.appendChild(logo8);
    logo8.classList.add("logo-set");
    let imgdiv8=document.createElement("div");
    logo8.appendChild(imgdiv8);
    let decdiv8=document.createElement("div");
    logo8.appendChild(decdiv8);
    
    let image8=document.createElement("img");
    image8.src=imagelogo4;
    image8.classList.add("image");
    imgdiv8.appendChild(image8);
    
    let head8=document.createElement("h1");
    head8.textContent="Blog";
    head8.classList.add("heading-update");
    decdiv8.appendChild(head8);
    
    let para8=document.createElement("p");
    para8.textContent="Avoid corruption to avoid risk your reputation ...";
    para8.classList.add("para-update");
    decdiv8.appendChild(para8);
    
    
    let logo9=document.createElement("div");
    data.appendChild(logo9);
    logo9.classList.add("logo-set");
    let imgdiv9=document.createElement("div");
    logo9.appendChild(imgdiv9);
    let decdiv9=document.createElement("div");
    logo9.appendChild(decdiv9);
    
    let image9=document.createElement("img");
    image9.src=imagelogo1;
    image9.classList.add("image");
    imgdiv9.appendChild(image9);
    
    let head9=document.createElement("h1");
    head9.textContent="Blog";
    head9.classList.add("heading-update");
    decdiv9.appendChild(head9);
    
    let para9=document.createElement("p");
    para9.textContent="Avoid corruption to avoid risk your reputation ...";
    para9.classList.add("para-update");
    decdiv9.appendChild(para9);
    
    
    
    
    let leftdivcontainer=document.createElement("div");
    leftdivcontainer.classList.add("total");
    updatesection.appendChild(leftdivcontainer);
    
    let leftset1=document.createElement("div");
    leftset1.classList.add("leftsettot1")
    leftdivcontainer.appendChild(leftset1);
    
    let leftsetdiv1=document.createElement("div");
    leftsetdiv1.classList.add("leftsetdiv12");
    
    
    
    let leftsetdiv2=document.createElement("div");
    leftsetdiv2.classList.add("leftsetdiv123")
    leftset1.appendChild(leftsetdiv2);
    
    let imagese1=document.createElement("div");
    // imagese1.src="factimg1.gif";
    leftsetdiv2.appendChild(imagese1);
    imagese1.classList.add("img-dim");
    let imgs1=document.createElement("img");
    imgs1.src=factGif;
    imgs1.classList.add("imgs-one");
    imagese1.appendChild(imgs1);
    let paa2=document.createElement("h2");
    paa2.textContent="FACT";
    paa2.classList.add("para-one");
    imagese1.appendChild(paa2);
    
    
    let leftsetdiv21=document.createElement("div");
    leftsetdiv21.classList.add("leftsetdiv1231");
    leftsetdiv2.appendChild(leftsetdiv21);
    
    let facts=document.createElement("h1");
    facts.classList.add("fact-design");
    let j=0;
    let fact=["It can be done in 3 days too!","That's not true any business can have it","All financial transactions are being monitored by IT Deptcarefull",
        "By mistake! you may loose your directorship","No that's true you collect and pay it from customers"
    ]
    setInterval(function(){
        facts.textContent=`${fact[i]}`;
        j=j+1;
        if(j==4){
            j=0;
        }
    },3000)
    leftsetdiv21.appendChild(facts);
    
    // ----------------------
    let leftset2=document.createElement("div");
    leftset2.classList.add("leftsettot1")
    leftdivcontainer.appendChild(leftset2);
    
    let leftsetdiv3=document.createElement("div");
    leftsetdiv3.classList.add("leftsetdiv12");
    
    let leftsetdiv4=document.createElement("div");
    leftsetdiv4.classList.add("leftsetdiv1234")
    leftset2.appendChild(leftsetdiv4);
    
    let imagese2=document.createElement("div");
    // imagese2.src="mythimg1.gif";
    imagese2.classList.add("img-dim-two");
    leftsetdiv4.appendChild(imagese2);
    let imgs2=document.createElement("img");
    imgs2.src=mythGif;
    imgs2.classList.add("imgs-one");
    imagese2.appendChild(imgs2);
    let paa1=document.createElement("h2");
    paa1.textContent="MYTH";
    paa1.classList.add("para-two");
    imagese2.appendChild(paa1);
    
    let leftsetdiv31=document.createElement("div");
    leftsetdiv31.classList.add("leftsetdiv12314");
    leftsetdiv4.appendChild(leftsetdiv31);
    
    let myth=document.createElement("h1");
    myth.classList.add("fact-design");
    let i=0;
    let myths=["Not filling ITRs save from taxes","RDC non compliance only result in late fee","paying GST is out of my profits",
        "Incorporation of company takes a lot of time and effort","Tradework is only for incorporate","Acounting can be outsourced"
    ]
    setInterval(function(){
        myth.textContent=`${myths[i]}`;
        i=i+1;
        if(i==5){
            i=0;
        }
    },3000)
    leftsetdiv31.appendChild(myth);
    
    // tablet and mobile.
    let factandmyth=document.createElement("div");
    factandmyth.classList.add("fact-and-myth");
    updatesection.appendChild(factandmyth);
    
    let mythtotdiv=document.createElement("div");
    factandmyth.appendChild(mythtotdiv);
    
    let mythdiv=document.createElement("div");
    mythdiv.classList.add("total-myht-div")
    mythtotdiv.appendChild(mythdiv);
    
    
    let mythdes=document.createElement("div");
    mythdes.classList.add("myth-des");
    mythdiv.appendChild(mythdes);
    
    let mythdesinner=document.createElement("div");
    mythdesinner.classList.add("myth-des-inner");
    mythdes.appendChild(mythdesinner);
    
    
    
    let imgdiv=document.createElement("div");
    imgdiv.classList.add("img-div")
    mythdesinner.appendChild(imgdiv);
    
    let imginner=document.createElement("div");
    imginner.classList.add("img-inner")
    imgdiv.appendChild(imginner);
    
    let mythlogo=document.createElement("img");
    mythlogo.src=spell;
    mythlogo.classList.add("img-dim1");
    imginner.appendChild(mythlogo);
    
    // -------------------------
    
    let imgpara=document.createElement("h1");
    imgpara.classList.add("img-para");
    imgpara.textContent="MYTH";
    mythdesinner.appendChild(imgpara);
    
    let imgcontent=document.createElement("P");
    imgcontent.classList.add("fact-img-data");
    let k=0;
    let mythss=["Not filling ITRs save from taxes","RDC non compliance only result in late fee","paying GST is out of my profits",
        "Incorporation of company takes a lot of time and effort","Tradework is only for incorporate","Acounting can be outsourced"
    ]
    setInterval(function(){
        imgcontent.textContent=`${myths[i]}`;
        k=k+1;
        if(k==5){
            i=0;
        }
    },3000)
    mythdesinner.appendChild(imgcontent);
    
    //kl
    
    let facttotdiv=document.createElement("div");
    factandmyth.appendChild(facttotdiv);
    
    
    let factdiv=document.createElement("div");
    factdiv.classList.add("total-fact-div")
    facttotdiv.appendChild(factdiv);
    
    let factdes=document.createElement("div");
    factdes.classList.add("fact-des");
    factdiv.appendChild(factdes);
    
    let factdesinner=document.createElement("div");
    factdesinner.classList.add("fact-des-inner");
    factdes.appendChild(factdesinner);
    
    let factimgdiv=document.createElement("div");
    factimgdiv.classList.add("fact-img-div")
    factdesinner.appendChild(factimgdiv);
    
    let factimginner=document.createElement("div");
    factimginner.classList.add("fact-img-inner")
    factimgdiv.appendChild(factimginner);
    
    let factlogo=document.createElement("img");
    factlogo.src=search;
    factlogo.classList.add("fact-img-dim1");
    factimginner.appendChild(factlogo);
    
    let factimgpara=document.createElement("h1");
factimgpara.classList.add("fact-img-para");
factimgpara.textContent="FACTS";
factdesinner.appendChild(factimgpara);

let factimgcontent=document.createElement("P");
factimgcontent.classList.add("fact-img-content");
let l=0;
let factr=["It can be done in 3 days too!","That's not true any business can have it","All financial transactions are being monitored by IT Deptcarefull",
    "By mistake! you may loose your directorship","No that's true you collect and pay it from customers"
]
setInterval(function(){
    factimgcontent.textContent=`${factr[l]}`;
    l=l+1;
    if(l==4){
        l=0;
    }
},3000)
factdesinner.appendChild(factimgcontent);
return updatesection;

}

export {updates};