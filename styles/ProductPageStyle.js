export default function IndexStyle(){
    return (
        <style jsx>
           {
               `
               :root{
                --bg-red:#a80000;
             }
            
            
                .PRODUCT-CONTAINER{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
            
                .PRODUCT-CONTAINER-RIGHT{
                    display: flex;
                    flex-direction: column;
                    width: 40%;
                    text-align: left;
                    height: 600px;
                    justify-content: center;
            
                }
                .PRODUCT-CONTAINER-RIGHT h1{
                    font-family: 'Poppins', sans-serif;
                    font-size: 30px;
                    color:black;
                }
            
                .PRODUCT-CONTAINER-RIGHT h4{
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    letter-spacing: 5px;
                    border-bottom:1px solid rgba(206, 204, 204, 0.513);
                    padding-bottom: 15px;
                    color:black;
                }
            
                .PRODUCT-CONTAINER-RIGHT h3{
                    font-family: Oswald;
                    font-size: 40px;
                    color:black;
                }
            
                .PRODUCT-CONTAINER-RIGHT h2{
                    letter-spacing:2px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    margin: 4px 0 0 4px;
                    color:black;
                }
            
                .PRODUCT-CONTAINER-RIGHT h5{
                    letter-spacing:2px;
                    font-family: 'Poppins', sans-serif;
                    font-size: 15px;
                    margin: 4px 0 0 4px;
                    color:rgb(13, 141, 13);
                }
            
             
            
                .PRODUCT-CONTAINER-RIGHT button{
                    width: 300px;
                    padding: 10px;
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    border:0;
                    border-radius: 25px;
                    margin-top:20px;
                    background:linear-gradient(to right,red, #660000);     
                    font-size: 20px;
                }
            
                .PRODUCT-CONTAINER-RIGHT button img{
                    width: 30px;
                    margin-right: 5px;
                }
                
                .PRET4{
                    display: block;
                    width: 40%;
                    height: 80px;
                    background-color: rgba(107, 107, 107, 0.281);
                    margin:10px 0 0 0 ;
                    padding:10px;
                  
                }
                .PRET4 h3{
                    font-size: 15px;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                }
            
                .CHENAR {
                    margin:30px 0 0  5px;
                }
                .CHENAR h5{
                    font-size: 15px;
                    letter-spacing: 3px;
                    font-family: 'Poppins', sans-serif;
                    color:black;
                    font-size: 17px;
                }
                .LEFT-CONTAINER{
                    display: flex;
                    flex-direction: row;
                    background-color: white;
                    justify-content: space-evenly;
                    width: 50%;
                    margin:auto 10px;
                }
            
                .CASETE{
                    display: flex;
                    flex-direction: column;
                    width: 25%;
                }
                
                .CASETE div{
                    color:black;
                    font-family: 'Poppins', sans-serif;
                    background-color: white;
                    height:160px;
                    padding:10px;
                    margin-top:10px;
                    text-align: center;
                    box-shadow:  0 0 20px 10px rgba(0, 0, 0, 0.048); 
                    border:1px solid transparent;
                    border-radius: 10px;      }
                
                .CASETE div img{
                    display: block;
                    margin: 10px auto;
                }
            
               .IMAGE{
                   width: 50%;
               }
            
               .image-product{
                    display: block; 
                    width: 100%;  
                    mix-blend-mode: multiply;
                }
                
                .INFORMATION {
                    display: flex;
                    flex-direction: row;
                    border-bottom:1px solid rgb(190, 186, 186);
                    justify-content: space-evenly;
                    letter-spacing:10px;
                       font-family: 'Montserrat', sans-serif;
                       font-size: 20px;
                       color: #888888;
                }
            
               
             
                .CANTITATE-ADAUGA{
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                    align-items: baseline;
                    width: 60%;
                }

                .input-group-text {
                    cursor:pointer;
                }

                .input-group-text:hover {
                    background-color:#cccecf;
                }
            
                   
                .GRUP-BUTOANE{
                    display: flex;
                    flex-direction: row;
                    height: 35px;
                 }
            
                 
                 .RECOMENDATION-TEXT{
                    margin:50px auto;
                    display: block;
                   text-align: center;
                   
                   }
                   .RECOMENDATION-TEXT div{
                   display: block;
                   margin: auto;
                   }
                   .RECOMENDATION-TEXT h2{
                       letter-spacing:10px;
                       font-family: 'Montserrat', sans-serif;
                       font-size: 20px;
                       color: #888888;
                   
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
                       margin: 10px 30px 50px 30px;
                       position:relative;
                       background-color: rgba(167, 167, 167, 0.274);
                       width:230px;
                       height:420px;
                       border-bottom-left-radius: 25px;
                       border-bottom-right-radius: 25px;
                       box-shadow:  0 0 40px 10px rgba(0, 0, 0, 0.055);
                       cursor:pointer;
                    }

                    .ADD-TO-CART {
                        position:absolute;
                        bottom:0;
                        width:100%;
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
                       font-size: 20px;
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
                
                .image-product{
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
            
                .CONTACT{
                    margin:auto;
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
                .PRODUCT-CONTAINER{
                    flex-direction: column;
                    justify-content: center;
                    height: auto;
                }
                .LEFT-CONTAINER{
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: auto;
                    margin: 10px auto;
                }
                .IMAGE{
                    width: 60%;
                }
             
                .image-product{
                            width: 100%;  
                 }
                .CASETE{
                    display: flex;
                    flex-direction: column;
                    width: 50%;
                }
                .CASETE div{
                    margin: auto;
                    width: 70%;
                    height:auto;
                    padding:5px;
                    box-shadow:  0 0 40px 10px rgba(0, 0, 0, 0.356); 
                    font-size: 8px;
                } 
                .CASETE div img{
                    width: 20%;
                    display: block;
                    margin: 6px auto;
                }
            
                .PRODUCT-CONTAINER-RIGHT{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;
                    height: auto;
                    justify-content: center;
            
                }
                .PRODUCT-CONTAINER-RIGHT h1{
                    font-size: 20px;
                }
                .PRODUCT-CONTAINER-RIGHT h4{ 
                    font-size: 8px;
                }
                .PRODUCT-CONTAINER-RIGHT h3{
                    font-size: 30px;
                    margin:0;
                }
            
                .PRODUCT-CONTAINER-RIGHT h2{
                    font-size: 12px;
                    margin:5px 0 5px 20px;
                }
                .PRODUCT-CONTAINER-RIGHT h5{
                    font-size: 12px;
                    margin:5px 0 5px 2px;
                }
                .CHENAR {
                    border-top:1px solid #e1e1e1;
                    text-align: left;
                     margin:10px 0 0 20px;
                }
                .CHENAR h5{
                    font-size: 12px;
                    text-align: left;
                    
                }
                .PRODUCT-CONTAINER-RIGHT button{
                    width: 60%;
                    padding: 10px;
                    font-size: 15px;
                }
                .PRODUCT-CONTAINER-RIGHT button img{
                    width: 30px;
                }
                .CANTITATE-ADAUGA{
                    width: 100%;
                    justify-content: space-evenly;
                }
                .GRUP-BUTOANE{
                    display: flex;
                    flex-direction: row;
                    height:38px;
                 }
            
                 .PRET4{
                    width: 85%;
                    height: 55px;
                    margin:auto;
                }
                .PRET4 h3{
                    font-size: 15px;
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
                    margin: 10px;
                    width:160px;  
                    height:330px;
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
                
                 .INFORMATION {
                    border-bottom:1px solid #e1e1e1;
                    margin-top:30px;
                }
                .INFORMATION h4{
                    font-size: 10px;
                    margin-left:10px;
                    letter-spacing:5px;
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
                .PRODUCT-CONTAINER{
                    flex-direction: column;
                    justify-content: center;
                    height: auto;
                }
                .LEFT-CONTAINER{
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: auto;
                    margin: 10px auto;
                }
                .IMAGE{
                    width: 40%;
                }
             
                .image-product {
                            width: 100%;  
                 }
                .CASETE{
                    display: flex;
                    flex-direction: column;
                    width: 40%;
                }
                .CASETE div{
                    margin: auto;
                    width: 70%;
                    height:auto;
                    padding:5px;
                    box-shadow:  0 0 40px 10px rgba(0, 0, 0, 0.356); 
                    font-size: 15px;
                } 
                .CASETE div img{
                    width: 25%;
                    display: block;
                    margin: 6px auto;
                }
            
                .PRODUCT-CONTAINER-RIGHT{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;
                    height: auto;
                    justify-content: center;
            
                }
                .PRODUCT-CONTAINER-RIGHT h1{
                    font-size: 30px;
                }
                .PRODUCT-CONTAINER-RIGHT h4{ 
                    font-size: 15px;
                }
                .PRODUCT-CONTAINER-RIGHT h3{
                    font-size: 40px;
                    margin:0;
                }
            
                .PRODUCT-CONTAINER-RIGHT h2{
                    font-size:20px;
                    margin:5px 0 5px 20px;
                }
                .PRODUCT-CONTAINER-RIGHT h5{
                    font-size: 20px;
                    margin:5px 0 5px 2px;
                }
                .CHENAR {
                    border-top:1px solid #e1e1e1;
                    text-align: left;
                     margin:10px 0 0 20px;
                }
                .CHENAR h5{
                    font-size: 18px;
                    text-align: center;
                    
                }
                .PRODUCT-CONTAINER-RIGHT button{
                    width: 60%;
                    padding: 10px;
                    font-size: 15px;
                }
                .PRODUCT-CONTAINER-RIGHT button img{
                    width: 30px;
                }
                .CANTITATE-ADAUGA{
                    width: 100%;
                    justify-content: space-evenly;
                }
                .GRUP-BUTOANE{
                    display: flex;
                    flex-direction: row;
                    height:38px;
                 }
            
                 .PRET4{
                    width: 85%;
                    height: 55px;
                    margin:auto;
                }
                .PRET4 h3{
                    font-size: 15px;
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
                    .LOGO{   
                        width:22%;
                        height:77px;
                    }
                    .PRODUCT-CONTAINER{
                        justify-content: space-evenly;
                    }
                    
                    .PRODUCT-CONTAINER-RIGHT{
                        width: 30%;
                        margin-top:20px;
                    }        
                   
                    .PRODUCT-CONTAINER-RIGHT h1{
                        font-size: 25px;
                    }
                    
                    .PRODUCT-CONTAINER-RIGHT button{
                        width: 50%;
                        font-size:15px;
                    }
                 
                    .LEFT-CONTAINER{
                        justify-content: center;
                        width: 60%;
                    }
               
                    .CASETE{
                        display: flex;
                        flex-direction: column;
                        width:30%;
                    }
                    
                    .CASETE div{
                        height:150px;
                        width: auto;
                        padding:5px;
                        }
                    
                    .CASETE div img{
                        width: 20%;
                    }
                    .CANTITATE-ADAUGA{
                        width: auto;
                        justify-content: space-evenly;
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