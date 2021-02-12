export default function ProduseStyle(){
    return (
        <style jsx="true">
        {
            `
            :root{
                --bg-red:#a80000;
             }
            
             html {
                scroll-behavior: smooth;
              }
            
                .BACKGROUND {
                    background-image: url(/images/2-copie.jpg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 400px;
                    position:relative;
                    width: 100%;
                }
                .BACKGROUND div{
                    margin:auto;
                    width: 100%;
                    background-color:rgba(4, 4, 4, 0.445);
                    padding: 20px 0 25px 0;
                    bottom:0;
                    position:absolute;
                }
                .BACKGROUND h1{
                    color: white;
                     font-family: 'Poppins', sans-serif; 
                     line-height: 60px; 
                     text-align: center;
                     font-size: 30px;
                }
            
                .TITLU-CONTAINER{
                    text-align: center;
                    background-color: rgba(225, 225, 225, 0.2);
                    height: 70px;
                    border-bottom:1px solid #CACACA;
                }
                  .TITLU h1{
                    letter-spacing:35px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 20px;
                    text-align: center;
                    color: #888888;
                    padding:20px;
                }
            
                .PRODUCTS-CONTAINER{
                    display: flex;
                    flex-direction: row;
                    text-align: left;
                    justify-content: center;
                }
             
                .imagine-filtru img{
                    width:60%;
                    display: block;
                    border:1px solid gray;
                    margin:10px;
                }
                .imagine-filtru{
                    width: 50%;
                    display: flex;
                    flex-direction: row;
                }
            
                .FILTRU{
                    height: auto;
                    width: 15%;
                    display: flex;
                    flex-direction: column;
                    border-right: 1px solid #C9CFE6;
                    margin-top:30px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                }
            
                .FILTRU select{
                    width:80%;
                    height:50px;
                    border-left:5px solid var(--bg-red);
                    border-bottom: 1px solid #e1e1e1;
                    border-right:none;
                    border-top:none;
                    margin:10px 0;
                    background-color: transparent;
                    font-family: 'Poppins', sans-serif; 
                }
                .FILTRU button{
                    width:80%;
                    height: 50px;
                    border:none;
                    border-radius: 25px;
                    margin: 10px;
                    background:linear-gradient(to right,red, #660000);
                    color:white;
                    font-family: 'Poppins', sans-serif;
                }
            
                  .SEZON-IMAGINE img{
                    width:70px;
                    margin:10px;
                }
                .SEZON-IMAGINE{
                    display: block;
                    width: 200px;
                    margin: auto;
                    letter-spacing:2px;
                    font-family: 'Poppins', sans-serif;
                }
                
                  .PRODUCTS-RIGHT{
                    display: flex;
                    flex-direction: column;
                    width: 60%;
                    margin-left: 10px;
                }
                
                .SORT{
                    margin: 10px 0 10px 40px;
                    color:#888888;
                }
            
                .SORT select{
                    border:0;
                    font-family: 'Poppins', sans-serif;
                    font-size: 12px;
                    color:#888888;
                    background-color: rgba(225, 225, 225, 0.2);
                    padding:5px;
                }
            
                .PRODUCTS-ITEMS{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                
                .ANVELOPA{
                    position:relative;
                    text-align: left;
                    background-color: rgba(199, 193, 193, 0.39);
                    width:220px;
                    height:420px;
                    border-bottom-left-radius: 25px;
                    border-bottom-right-radius: 25px;
                    box-shadow:  0 0 20px 10px rgba(0, 0, 0, 0.226);
                    margin: 30px;
                    cursor:pointer;
                 }
                
                
            .ANVELOPA h4{
                margin:15px 0px 0 15px;
                font-family: 'Oswald', sans-serif;
                color: black;
                font-size: 1.2rem;
            }
            .ANVELOPA h6{
            color:#7C0000;
            margin:10px 0 0 20px;
            }
            .ANVELOPA h2{
                font-size: 17px;
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
               
               
            /* SETARI PENTRU TELEFON */
            @media screen and (max-width:768px){
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
                }
            
                .NAV-LINK{
                  text-align: center;
                  margin:0;
                }
                .CONTACT{
                    margin:auto;
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
            
            .BACKGROUND {
                width: 100%;
                height: 200px;
            }
            .BACKGROUND div{
                padding: 2px;
            }
            .BACKGROUND h1{
                 font-size: 15px;
                 line-height: 30px; 
            }
            .TITLU-CONTAINER{
                height: 70px;
                border-bottom:1px solid #e1e1e1;
            }
              .TITLU h1{
                letter-spacing:10px;
                font-size: 12px;
                text-align: center;
            }
            .imagine-filtru img{
                width:30%;
                display: block;
                border:1px solid gray;
                margin:10px;
            }
            .imagine-filtru{
                width: 50%;
                display: flex;
                flex-direction: row;
            }
            .PRODUCTS-CONTAINER{
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: center;
            }
            .FILTRU{
                height: auto;
                width: 90%;
                border-right:0;
                margin:auto;
                font-size: 12px;
            }
            .FILTRU select{
                width:90%;
                height:40px;
                margin:5px 0;
            }
            .FILTRU button{
                margin:auto;
                height: 35px;
            }
            
            .PRODUCTS-RIGHT{
                width: 100%;
            }
            
            .SORT{
                justify-content: center;
                font-size: 10px;
            }
            
            .SORT select{
                height: 30px;
            }
            
            .ANVELOPA{
                height:330px;
                width:170px;  
                margin:10px auto;
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
                .imagine-filtru img{
                    width:30%;
                    display: block;
                    border:1px solid gray;
                    margin:10px;
                }
                .imagine-filtru{
                    width: 30%;
                    display: flex;
                    flex-direction: row;
                }
            
                .BACKGROUND div{
                    padding: 2px;
                }
                .BACKGROUND h1{
                     font-size:20px;
                     line-height: 30px; 
                }
                .TITLU-CONTAINER{
                    height: 70px;
                    border-bottom:1px solid #e1e1e1;
                }
                .TITLU h1{
                    letter-spacing:10px;
                    font-size:15px;
                    text-align: center;
                }
                    .PRODUCTS-CONTAINER{
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        justify-content: center;
                    }
                    .FILTRU{
                        height: auto;
                        width: 90%;
                        border-right:0;
                        margin:auto;
                        font-size: 12px;
                    }
                    .FILTRU select{
                        width:90%;
                        height:40px;
                        margin:5px 0;
                    }
                    .FILTRU button{
                        margin:auto;
                        height: 35px;
                    }
                    
                    .PRODUCTS-RIGHT{
                        width: 100%;
                    }
                    
                    .SORT{
                        justify-content: center;
                        font-size: 10px;
                    }
                    
                    .SORT select{
                        height: 25px;
                    }
                    
                    .ANVELOPA{
                        width:170px;  
                        
                        margin:10px auto;
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
            
            @media screen and (min-width:1024px) and (max-width:1680px){
                .BACKGROUND{
                    width: 100%;
                    height: 400px;}
            
                    .LOGO{   
                        width:22%;
                        height:77px;
                    }
                   .CASETE div{
                   width:50%;
                   height:auto;
                   margin: 8px 50px ;}
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