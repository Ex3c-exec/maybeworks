export default function IndexStyle(){
    return (
        <style jsx>
           {
               `
               :root{
                --bg-red:#a80000;
             }
              
             body{
                 background-image: url(/images/tyresmark4.jpg);
                 background-repeat:no-repeat;
                 background-color:rgba(232, 229, 229, 0.47);
                 background-size:100%;
                 background-blend-mode:soft-light; 
                 box-sizing: border-box;
                 
             }
             
             .BACKGROUND{
                 background-image: url(/images/cauciuc.jpg);
                 background-size: cover;
                 height: 600px;
                 position: relative;
             }
             
             .CASETE{
                 position: absolute;
                 display: flex;
                 flex-direction: column;
                 margin: 10px;
             }
             
             .CASETE div{
                 color: white;
                 font-family: 'Montserrat', sans-serif;
                 width:50%;
                 height:160px;
                 padding:10px;
                 background-color: rgba(0,0,0,0.5);
                 text-align: center;
                 margin:15px 50px;
               }
             
             .CASETE div img{
                 display: block;
                 margin: 10px auto 20px auto;
             }
             
             .FILTRU{
                 display: flex;
                 justify-content: center;
                 height: 120px;
                 margin: 50px auto 0 auto;
                 border:1px solid gray;
                 border-left:none;
                 border-right:none;
                 width: 70%;
                 align-items: center;
             }
             
             .FILTRU select{
                 width: 200px;
                 height: 50px;
                 border:2px solid white;
                 border-radius: 5px;
                 margin: 10px;
                 font-family:'Poppins', sans-serif;;
                 background-color:var(--bg-red);
                 color:white;
                 padding:5px;
             }
             
             .FILTRU button{
                 width: 200px;
                 height: 50px;
                 border:none;
                 border-radius: 25px;
                 margin: 10px;
                 background:linear-gradient(to right,red, #660000);
                 color:white;
                 font-family: 'Poppins', sans-serif;
             }
             .RECOMENDATION-TEXT{
              margin: auto;
              display: block;
             text-align: center;
             height:100px;
             padding-top:30px;
             
             }
             .RECOMENDATION-TEXT div{
                display: block;
                margin: auto;
             }
             .RECOMENDATION-TEXT h2{
                 letter-spacing:10px;
                 font-family: 'Poppins', sans-serif;
                 font-size: 20px;
                 color: #161414;
             }
             
             .RECOMENDATION-ITEMS{
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
                height: 50%;
                width: 80%;
                align-items: baseline;
                margin:auto;
             }
             
             
             .RECOMENDATION-ITEMS a{
                 text-decoration:none;
                 text-align: none;
             }
            
             .ANVELOPA{
                 text-align: left;
                 position:relative;
                 margin: 10px 30px 50px 30px;
                 background-color: rgba(199, 193, 193, 0.39);
                 width:230px;
                 height:420px;
                 border-bottom-left-radius: 25px;
                 border-bottom-right-radius: 25px;
                 box-shadow:  0 0 40px 10px rgba(0, 0, 0, 0.287);
                 cursor:pointer;
              }
              
             
             .ANVELOPA h4{
                 margin:15px 0px 0 15px;
                 font-family: 'Oswald', sans-serif;
                 color: black;
                 font-size: 1.2rem;
             }
             .ANVELOPA h6{
             margin:10px 0 0 20px;
             font-size: 20px;
             }
             .ANVELOPA h2{
                 font-size:17px;
                 font-family: 'Poppins', sans-serif;
                 color:rgba(28, 26, 26, 0.99);
                 margin:10px 0 10px 20px;
             }
             
             .ANVELOPA img{
                 width: 100%;
                 position: relative;
             }
             .ANVELOPA img:hover {
                 transition: transform .5s ease;
                 transform: scale(1.1);
             } 

             .ADD-TO-CART {
                position:absolute;
                bottom:0;
                width:100%;
             }
             
             .ADD-TO-CART button{
                 width: 100%;
                 padding: 10px;
                 color: white;
                 font-family: 'Poppins', sans-serif;
                 border:0;
                 border-radius: 25px;
                 background:linear-gradient(to right,red, #660000);     
                 font-size: 15px;
             }
             .ADD-TO-CART button img{
                 width: 30px;
                 margin-right: 10px;
             }
             
             .IMAGINE img{
                 width: 70%;
             }
             
              .BLOC{
                 display: flex;
                 flex-direction: row;
                 width:90%;
                 margin: 20px auto;
                 justify-content: center;
               
             }
              .BLOC img{
                 width: 20%;
                 margin:5px;
                 background-blend-mode: overlay;
                 display: block;
                 border:1px solid transparent;
                 border-radius: 10px;
             }
             .BLOC img:hover {
                 transition: transform .5s ease;
                 transform: scale(1.2);
             } 
             
             
             
             /* SETARI PENTRU TELEFON */
             
             @media screen and (max-width:768px)
             {
                 .HEADER{
                     width: 100%;
                     flex-direction: row;
                     height: 80px;
                     justify-content: space-evenly;
                     align-items: center;
                     background-color: rgb(42, 42, 42);
                     flex-wrap: wrap;
                 }
                 .HEADER span{
                     background-image: url(/images/search2.png);
                     background-size: 30px;
                     height: 50px;
                     background-color: transparent;
                 }
             
                 .LOGO{   
                     width:50%;
                     height:60px;
                     background-size: cover;
                     border-radius: 12px;
                     box-shadow: inset 0 0 10px 8px #707070;
                     align-content: left;
                     margin-top:10px;
                 }
                 
                 .LOGO-INPUT{
                     width: 70%;
                     display: flex;
                     flex-direction: row;
                     justify-content: space-around;
                 }
             
                 nav{
                     width: 100%;
                     margin:0;
                     height: auto;
                 }
             
                 .NAV-LINK{
                   text-align: center;
                   margin:0;
                 }
                 
             
                 .COS{
                     width:10%;
                     height: 50px;
                     border: 0;
                     background-image: url(/images/cos.png);
                     background-size: 30px;
                     background-color: transparent;
                     border-radius: 0;
                     background-position-x: 1px;
                     background-position-y: 8px;
                     padding-left: 30px;
                     } 
             
                 .COS h5{
                     display: none;
                 }
             
               
                 form{
                     width:10%;
                     margin-top:15px;
                 }
                 .HEADER input{
                   display: none;
                 }
                 .HEADER span{
                     display: block;
                     border: 1px solid transparent;
                     background-position-y: 8px;
                     width: 5px;
             
             
                 }
                 .CONTACT{
                     margin:auto;
                 }
                 .BACKGROUND {
                      width: 100%;
                      height: 260px; 
                 }
                 
                 .CASETE{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                     margin:0px;
                 }
                     
                 .CASETE h6{
                     font-size: 9px;
                 }
             
                  .CASETE div{
                     width: 100%;
                     height: 86.5px;
                     margin:0;
                     
                   }
             
                   .CASETE div img{
                     display: block;
                     margin: auto;
                     width: 20px;
                    
                    } 
             
                   .FILTRU{
                     display: flex;
                     flex-direction: column;
                     height: auto;
                 }
                 
                 .FILTRU select{
                 width: 100%;
                 height: 40px;
                 background-color:rgb(177, 174, 174);
                 color:black;
                }
             
                .FILTRU button{
                 width: 100%;
                 height: 40px;
                 }
                .RECOMENDATION-TEXT h2{
                 letter-spacing:5px;
                 font-size: 15px;
                }
             
                .RECOMENDATION-ITEMS{
                 display: flex;
                 width: 100%;
             
                 }
             
                 .ANVELOPA{
                 height:330px;
                 margin: 10px;
                 width:160px;  
                 } 
             
                 .ANVELOPA h4{
                 margin:15px 0 0 20px;
                 font-size: 15px;
             }
             
             .ADD-TO-CART button{
                 width: 100%;
                 font-size: 12px;
             }
             
             .ADD-TO-CART button img{
                 width: 20px;
             }
             
             .BLOC{
                 width:100%;
                 flex-direction: row;
                 flex-wrap: wrap;
                 margin: 3px auto;
                 height: auto;
             }
             
             .BLOC img{
                 width: 45%;
                 margin:2px;
                 height: 100px;
             
                }
            
             }
             
             /* SETARI PENTRU TABLETA */ 
              @media screen and (min-width:768px) and (max-width:1024px){
                 nav{
                     width: 100%;
                     margin:0;
                     height: auto;
                 }
             
                 .NAV-LINK{
                   text-align: center;
                   margin:0;
                 }
                 
                 .CONTACT{
                     margin: auto;
                 }
                 
                 .LOGO{   
                     width:25%;
                     height:60px;
                 }
                 .COS {
                     width: 150px;
                     height: 70px;
                 } 
                 .COS h5{
                     font-size:15px;
                     letter-spacing: 0;
                 }
             
                 .BACKGROUND {
                     width: 100%;
                     height: 350px; 
                }
            
                .CASETE {
                    width: 100%;
                }
            
                .CASETE div{
                 width:auto;
                 height:100px;
                 margin:5px 50px;
                }
               .CASETE h6{
              font-size: 15px;
                }
                .CASETE div img{
                 margin: 10px auto;
                 width: 25px;
                 }
                .ANVELOPA{
                 margin: 10px;
                 width:190px;  
                 } 
             
               .BLOC{
                 width:70%;
                 flex-direction: row;
                 margin: 3px auto;
                 height: auto;
             }
             
             .BLOC img{
                 width: 20%;
                 margin:5px;
                 height: auto;
             
             }             
        } 
             
             /* SETARI PENTRU ECRAN MAI MARE DE 1024PX */
             @media screen and (min-width:1024px) and (max-width:1680px){
                 .BACKGROUND{
                     width: 100%;
                     height: 400px;
                    }
             
                     .LOGO{   
                         width:22%;
                         height:77px;
                     }
            
                    .CASETE div{
                        width:50%;
                        height:auto;
                        margin: 8px 50px;
                }
            
                  .CASETE h6{
                 font-size: 15px;
             }
                 .CASETE div img{
                 margin: 10px auto;
                 width: 30px;
                 }
                 .ANVELOPA{
                 margin: 10px;
                 width:185px;  
                 } 
                 
                     
                }
               `
           } 
        </style>
    )
}