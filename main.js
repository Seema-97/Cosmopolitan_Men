const selectElm = document.getElementById('avatar');

const btnElm = document.getElementById('js-button');

const imgDivElm = document.getElementById('js-image-row');



btnElm.addEventListener('click', () =>
{
   if (selectElm.value === 'athletic')
   {
    
   //  img1Tag = document.createElement('img');
   //  img1Tag.src = 'images/athletic.jpeg'
   //  img1Tag.classList.add('img');

   //  imgDivElm.append(img1Tag);

    imgDivElm.innerHTML = `<img src="athletic.jpeg"  style="  height: 65vh;
    width:100vh;
    border-radius: 6px;
    object-fit: cover;
    object-position:center;
    margin-top:10px;
    margin-bottom:10px;" 
    / >` ;
  

   }
   else if(selectElm.value === 'cottagecore')
   {
    
   imgDivElm.innerHTML = `<img src="cottagecore.jpeg" / 
   style="  height: 65vh;
   width:100vh;
   border-radius: 6px;
   object-fit: cover;
   object-position:center;
   margin-top:10px;
   margin-bottom:10px;"  
    />` ;

   }

   else if(selectElm.value === 'monochromatic')
   {

      imgDivElm.innerHTML = `<img src="mono1.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >` ;

   }
   else if(selectElm.value === 'virbrant')
   {
      imgDivElm.innerHTML = `<img src="vibrant1.jpeg" 
    style="height: 65vh;
    width:100vh;
    border-radius: 6px;
    object-fit: cover;
    object-position:center;
    margin-top:10px;
    margin-bottom:10px;"
      / >`;
   }
    
   else if(selectElm.value === 'bussiness-casual')
   {
      imgDivElm.innerHTML = 
   `
      <img src="bussiness1.jpeg" 
      style=" height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="bussiness2.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="bussiness3.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="bussiness4.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="bussiness5.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >
      ` ;
   }

     
   else if(selectElm.value === 'classy-casual')
   {
      imgDivElm.innerHTML = 
      
   `
      <img src="classy1.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
    / >

      <img src="classy2.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="classy3.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >
      ` ;
   }

   else if(selectElm.value === 'lumberjack')
   {
      imgDivElm.innerHTML = 
      
   `
      <img src="lumberjack1.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >

      <img src="lumberjack2.jpeg" 
      style="height: 65vh;
      width:100vh;
      border-radius: 6px;
      object-fit: cover;
      object-position:center;
      margin-top:10px;
      margin-bottom:10px;"
      / >
      ` ;
   }


}

)

