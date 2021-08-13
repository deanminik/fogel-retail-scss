
jQuery(document).ready(function () {

        
        
        var ventana_ancho = jQuery(window).width();

         

        if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 

                jQuery(".espacio").attr("style","padding: 45px 2px;");

                if(ventana_ancho >= 1240){
                        jQuery(".social").attr("style","display: flex !important; justify-content: flex-end !important;");
                }else{}
                
        }else{}
        jQuery(window).scroll(function () {
                if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
                        if (jQuery("#Top_bar").hasClass("is-sticky")){
                                jQuery("#Top_bar .top_bar_right_wrapper").attr("style","top: 21px !important;");
                                if(ventana_ancho == 1280){
                                        jQuery(".social").addClass("chrome-special-1280");
                                        jQuery("ul#menu-productos-paginas").addClass("product-paginas-chrome");
                                       
                                }else if(ventana_ancho >= 1240  && ventana_ancho <= 1370){
                                        jQuery(".social").addClass("chrome-special");
                                        // if(pageURL != url_home){
                                        //         jQuery(".social").addClass("chrome-special");
                                        // }else{}
                                       
                                }else{}
                        }else{
                                jQuery(".social").removeClass("chrome-special-1280");  
                        }
                      
                        
                }else{}
        });

        // jQuery(window).scroll(function () {
        //         if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
        //                 if (jQuery("#Top_bar").hasClass("is-sticky")){
        //                         if(pageURL == url_home){
        //                                 if(ventana_ancho >= 1285){
        //                                         jQuery("ul#menu-productos-paginas").attr("style","padding-left: 36%!important;");
        //                                 }
        //                         }
                                       
        //                 }
        //         }
        // });
     
     

        if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
                // alert('I am chrome')
                // jQuery(".social").attr("style","left: 90% !important; ");
                  if(ventana_ancho == 1280){
                        if(pageURL == url_home){
                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 7%!important;");
                        }else{
                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 2%!important;");
                        }
                       
                        jQuery(".social").attr("style","left: 90% !important; ");
                        //   alert('I am chrome');
                          
                  }else if(ventana_ancho >= 1505){
                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;");
                        jQuery(".social").attr("style","left: 93% !important; ");
                  }else if(ventana_ancho >= 1240 && ventana_ancho <= 1390 ){
                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;");
                  }
                  
                 }else{

                 }


    
        // //menu
        
        


        var thispage = jQuery(location).attr('href'); 
        var url_donde_comprar = "https://www.fogelretail.com/donde-comprar/";
        var refrigeradores = "https://www.fogelretail.com/refrigeradores/";
        var congeladores = "https://www.fogelretail.com/congeladores/"


        //replace li sections
        // var mostradores_refrigerados = jQuery("#menu-item-961 a");
        // jQuery(mostradores_refrigerados).replaceWith('<a href="https://www.fogelretail.com/product-category/mostradores-refrigerados/">Mostradores<br>Refrigerados</a>');
       
        // var mesas_para_refrigeracion = jQuery("#menu-item-807 a");
        // jQuery(mesas_para_refrigeracion).replaceWith('<a>mesas para preparación<br>de alimentos</a>');
        
        

        var pageURL = jQuery(location).attr("href");
        var url_refrigeradores = "https://www.fogelretail.com/product-category/refrigeradores/";
        var url_refrigeradores_froster = "https://www.fogelretail.com/product-category/refrigeradores/froster-para-cervezas-bajo-0-c/";
        var url_congeladores = "https://www.fogelretail.com/product-category/congeladores/";
        var url_mostradores_refrigerados = "https://www.fogelretail.com/product-category/mostradores-refrigerados/";
        var url_mesa_preparacion = "https://www.fogelretail.com/product-category/mesa-para-preparacion-de-alimentos/"; 
        var url_mesa_preparacion_refrigeradoras = "https://www.fogelretail.com/product-category/mesa-para-preparacion-de-alimentos/refrigeradoras/";
        var url_mesa_preparacion_congeladoras = "https://www.fogelretail.com/product-category/mesa-para-preparacion-de-alimentos/congeladoras/";
        var url_hielo = "https://www.fogelretail.com/product-category/hielo/";

        var url_home = "https://www.fogelretail.com/";
        var url_nosotros ="https://www.fogelretail.com/sobre-nosotros/";
        var url_donde = "https://www.fogelretail.com/donde-comprar/";
        var url_soporte = "https://www.fogelretail.com/soporte/"; 
        var url_conntactenos = "https://www.fogelretail.com/contactenos/";
        var url_mapa_sitio = "https://www.fogelretail.com/mapa-del-sitio/";
       
          jQuery(".compare .button .added").text("COMPARAR");

        //paises
        if(ventana_ancho >= 760){

                var y = jQuery(window).scrollTop(); 
                // jQuery("html, body").animate({ scrollTop: y + jQuery(window).height() }, 600);
                //guatemala
                jQuery("#menu-paises #menu-item-993").click(function(){
                        jQuery('html, body').animate({scrollTop: '150px'}, 800);
                        // jQuery("html, body").animate({ scrollTop: y - jQuery(window).height() }, 800);
                });
                //honduras
                jQuery("#menu-paises #menu-item-994").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1000px'}, 800);
                      
                });
                //el salvador
                jQuery("#menu-paises #menu-item-995").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1000px'}, 800);
                        
                });
                //nicaragua
                jQuery("#menu-paises #menu-item-996").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1300px'}, 800);
                        
                });
                //costarica
                jQuery("#menu-paises #menu-item-997").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1300px'}, 800);
                        
                });
                //panama
               
                jQuery("#menu-paises #menu-item-998").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1600px'}, 800);
                        
                });
                //colombia
                jQuery("#menu-paises #menu-item-999").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1600px'}, 800);
                        
                });
                //ecuador
                jQuery("#menu-paises #menu-item-1000").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1950px'}, 800);
                        
                });
                //mexico
                jQuery("#menu-paises #menu-item-1001").click(function(){
                        
                        jQuery('html, body').animate({scrollTop: '1950px'}, 800);
                        
                });
                //peru
                jQuery("#menu-paises #menu-item-1002").click(function(){
                        // jQuery('html, body').animate({scrollTop: '+=0px'}, 0);
                        jQuery('html, body').animate({scrollTop: '2250px'}, 800);

    
                });

        }else{

        }
      
//_______________________________________
       jQuery(".wcps-items-excerpt").attr("style","padding: 5px ;");
        
       jQuery(".post-more").text("Leer más");
     
       if(ventana_ancho >=1400){
        jQuery(".wcps-items-title a").attr("style","font-size: 19px !important;");
        jQuery(".wcps-items-category a").attr("style","font-size: 14px !important;");
       }else{
        jQuery(".wcps-items-title a").attr("style","font-size: 10px !important;");
        jQuery(".wcps-items-category a").attr("style","font-size: 5px !important;");
       }

        
        if(pageURL != url_home){
        //     jQuery("#Top_bar .search_wrapper").attr("style","margin-top: 94px; left: 109px !important;");
        if(ventana_ancho >= 1240){
                jQuery("#menu-productos-paginas").attr("style","border-right: 500px solid #FDFBFF; border-left: 500px solid #FDFBFF;");
        }else{}
            
        }else{}
       
       
        //   index iconos       
//        

      //-
      jQuery(".refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/vectorpaint.svg");
      jQuery(".refrigeradores-c img").hover(function(){
              jQuery(".refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/refrigeradores.svg");
            }, function(){
              jQuery(".refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/vectorpaint.svg");
            }); 

       //-
        jQuery(".congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/Icono-Congeladores.svg");
        jQuery(".congeladores-c img").hover(function(){
                jQuery(".congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/congeladores.svg");
              }, function(){
                jQuery(".congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/Icono-Congeladores.svg");
              });  
        //-
        jQuery(".mostradores-refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/icono-mostradores-refrigeradores-blanco-svg.svg");
        jQuery(".mostradores-refrigeradores-c img").hover(function(){
                jQuery(".mostradores-refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/mostradores-refrigeradores.svg");
              }, function(){
                jQuery(".mostradores-refrigeradores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/icono-mostradores-refrigeradores-blanco-svg.svg");
              });  
        //
        jQuery(".mesas-preparacion-alimentos-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/mesa-preparacion-alimentos-fogel.png");
        jQuery(".mesas-preparacion-alimentos-c img").hover(function(){
                jQuery(".mesas-preparacion-alimentos-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/mesas-preparacion-alimentos.svg");
              }, function(){
                jQuery(".mesas-preparacion-alimentos-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/mesa-preparacion-alimentos-fogel.png");
              }); 
        //-
        jQuery(".cofres-congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/congeladores-cofres-fogel.png");
        jQuery(".cofres-congeladores-c img").hover(function(){
                jQuery(".cofres-congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/cofres-congeladores.svg");
              }, function(){
                jQuery(".cofres-congeladores-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/congeladores-cofres-fogel.png");
              }); 
        //-
        jQuery(".hielo-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/hielo-fogel.svg");
        jQuery(".hielo-c img").hover(function(){
                jQuery(".hielo-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/04/hielo.svg");
              }, function(){
                jQuery(".hielo-c img").attr("src", "https://www.fogelretail.com/wp-content/uploads/2021/06/hielo-fogel.svg");
              }); 
        

        jQuery(window).scroll(function () {
                if (jQuery("#Top_bar").hasClass("is-sticky")) {
                        jQuery(".social").attr("style","top: 88px !important;");
                       
                        // alert("syky");
                        // jQuery("#secondary-menu").attr("style","top:61px;");
                        // jQuery(".social").attr("style","top: 89px;");
                        if(ventana_ancho >= 1240){
                           jQuery("#Top_bar .top_bar_right_wrapper").attr("style", "top: 21px !important;");
                           jQuery(".social").attr("style","top: 88px !important;");
                           jQuery("#secondary-menu").attr("style","top:61px;");
                        }else{
                                jQuery("#Top_bar .top_bar_right_wrapper").attr("style", "top: 32px;");
                        }
                      }else{
                        jQuery("#secondary-menu").attr("style","top:89px;");
                        jQuery(".social").attr("style","top: 73px;");
                        jQuery("#Top_bar .top_bar_right_wrapper").attr("style", "top: 31px; !important");
                      }

                      if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
                        // alert('I am chrome')
                        // jQuery(".social").attr("style","left: 90% !important; ");

                          if(ventana_ancho == 1280 ){
                                  if(pageURL == url_home){
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 7%!important;"); 
                                // }else if(ventana_ancho >=1500){
                                //         jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;"); 
                                
                                }else{ 
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 2%!important;"); 
                                  }
                                
                               
                                jQuery(".social").attr("style","left: 90% !important; ");
                                //   alert('I am chrome');
                                  
                          }else if(ventana_ancho >= 1505){
                                 if(pageURL == url_home){
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 36%!important;"); 
                                 }else{
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;");
                                 } 
                               
                                jQuery(".social").attr("style","left: 93% !important; ");
                          }else if(ventana_ancho >= 1275 && ventana_ancho <= 1285){
                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 7%!important;");
                          }else if(ventana_ancho >= 1240 && ventana_ancho <= 1500 ){
                                  if(pageURL != url_home){
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;");
                                  }else{
                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 15%!important;");
                                  }
                                
                          }else{}
                          
                         }else{
        
                         }
                        
                        
            });
       

        


        if(pageURL == url_home){
                jQuery(".product_type_simple").html("VER DETALLES");
        }
        
        jQuery(".wsp-pages-title").html("Páginas");

        if(pageURL == url_home){
                if(ventana_ancho >=1240 && ventana_ancho <=1300){
                        jQuery("#menu-productos-paginas").addClass("index-complicado");
                }else if(ventana_ancho >= 1310 && ventana_ancho <= 1500){
                        jQuery("#menu-productos-paginas").addClass("index-complicado-laptop");

                }else if(ventana_ancho >=1551){
                        jQuery("#menu-productos-paginas").addClass("index-grande");
                }else{}
        }else{

        }

        if(pageURL == url_conntactenos){
                jQuery("#Header_wrapper").addClass("background-contacto");
                jQuery(".jq-tabs.tabs_wrapper.ui-tabs.ui-corner-all.ui-widget.ui-widget-content").attr("style","display: block !important;");
        }else if(pageURL == url_nosotros){
                jQuery("#Header_wrapper").addClass("background-sobrenosotros");
            
        }else if(pageURL == url_donde){
                jQuery("#Header_wrapper").addClass("background-donde-comprar");
                
        }else if(pageURL == url_soporte){
                jQuery("#Header_wrapper").addClass("background-soporte");

        }else{

        }

        var active = false; 

        jQuery("#widget_mfn_menu-2").addClass("animate__animated animate__backInUp");

        jQuery(".btn_paises").click(function(){

                
                if(active == false){
                        jQuery("#widget_mfn_menu-2").attr("style","display: block !important;");
                        active = true;
                     
                }else if(active == true){
                        jQuery("#widget_mfn_menu-2").attr("style","display:none !important;");
                        active = false;
                     
                }
              }); 

        if(pageURL == url_donde_comprar){
                jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","background-color: transparent !important;");
        }else{

        }

        if(ventana_ancho >= 1240){
                jQuery("#menu-item-965 a[href='https://www.fogelretail.com/product-category/mesa-para-preparacion-de-alimentos/']").html("<a class='preparacion'>Mesa para preparación<br>de alimentos</a>");
                jQuery("#menu-item-961 a[href='https://www.fogelretail.com/product-category/mostradores-refrigerados/']").html("<a class='mostrador'>Mostradores<br>Refrigerados</a>");
        }else{
        }


        if(pageURL == url_home){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
        }else if(pageURL == url_nosotros){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
                //
                jQuery("#menu-item-817").attr("style","background: #2f75bb; !important");
                jQuery("#menu-item-817 a span").attr("style","font-weight: bold !important; color: white !important;");
        }else if(pageURL == url_donde){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
                //
                jQuery("#menu-item-818").attr("style","background: #2f75bb; !important");
                jQuery("#menu-item-818 a span").attr("style","font-weight: bold !important; color: white !important;");

        }else if(pageURL == url_soporte){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
                //
                jQuery("#menu-item-819").attr("style","background: #2f75bb; !important");
                jQuery("#menu-item-819 a span").attr("style","font-weight: bold !important; color: white !important;");
        }else if(pageURL == url_conntactenos){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
                //
                jQuery("#menu-item-820").attr("style","background: #2f75bb; !important");
                jQuery("#menu-item-820 a span").attr("style","font-weight: bold !important; color: white !important;");
        }else if(pageURL == url_mapa_sitio){
                jQuery("#Top_bar .container").attr("style","width: 100%; !important");
                jQuery(".top_bar_left.clearfix").attr("style","width: 85% !important;");
        }else{}



        //page
        if(pageURL != url_home){
                if(ventana_ancho >=1240){
                        jQuery("#Header").attr("style","margin-bottom: 8% !important;");
                }
                
        }


        if (pageURL == url_refrigeradores) {
         jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
         jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
         jQuery(".shop-filters").attr("style","display: none;");
         jQuery(".products.grid").attr("style","display: none;");
          
        }else if(pageURL == url_refrigeradores_froster){
                jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                jQuery(".shop-filters").attr("style","display: none;");
                jQuery(".products.grid").attr("style","display: none;");
                //------
                if(ventana_ancho >= 1000){
                        jQuery(".category_title_description__h1").attr("style","margin-right: 17%; text-transform: uppercase; width: 117%;");
                }

                }else if(pageURL == url_congeladores){
               
                        jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                        jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                        jQuery(".shop-filters").attr("style","display: none;");
                        jQuery(".products.grid").attr("style","display: none;");
                        
                        }else if(pageURL == url_mostradores_refrigerados){
                                jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                                jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                                jQuery(".shop-filters").attr("style","display: none;");
                                jQuery(".products.grid").attr("style","display: none;");    

                                 }else if(pageURL == url_mesa_preparacion){
                                        jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                                        jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                                        jQuery(".shop-filters").attr("style","display: none;");
                                        jQuery(".products.grid").attr("style","display: none;"); 
                                 
                                        }else if(pageURL == url_mesa_preparacion_refrigeradoras){
                                                jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                                                jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                                                jQuery(".shop-filters").attr("style","display: none;");
                                                jQuery(".products.grid").attr("style","display: none;"); 
                                                
                                                }else if(pageURL == url_mesa_preparacion_congeladoras){
                                                        jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                                                        jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                                                        jQuery(".shop-filters").attr("style","display: none;");
                                                        jQuery(".products.grid").attr("style","display: none;"); 
                                                
                                                         }else if(pageURL == url_hielo){
                                                                jQuery(".mcb-sidebar.sidebar.sidebar-1.four.columns").attr("style","display: none;");
                                                                jQuery(".with_aside .sections_group").attr("style","width: 100% !important;");
                                                                jQuery(".shop-filters").attr("style","display: none;");
                                                                jQuery(".products.grid").attr("style","display: none;");   
                                                         }else{}        
                                                        
                                                         //______________________________________________________________-
                                                         jQuery(window).resize(function () {
                                                                // alert("cambiando");
                                                                if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
                                                                        // alert('I am chrome')
                                                                        // jQuery(".social").attr("style","left: 90% !important; ");
                                                                          if(ventana_ancho == 1280 ){
                                                                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 7%!important;"); 
                                                                               
                                                                                jQuery(".social").attr("style","left: 90% !important; ");
                                                                                //   alert('I am chrome');
                                                                                  
                                                                          }else if(ventana_ancho >= 1505){
                                                                                  if(pageURL == url_home){

                                                                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 36%!important;");
                                                                             }else{

                                                                             }                                                                                  
                                                                         
                                                                                jQuery(".social").attr("style","left: 93% !important; ");
                                                                          }else if(ventana_ancho >= 1275 && ventana_ancho <= 1285){
                                                                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 7%!important;"); 
                                                                          }else if(ventana_ancho >= 1240 && ventana_ancho <= 1500 ){
                                                                                  if(pageURL == url_home){
                                                                                        jQuery("ul#menu-productos-paginas").attr("style","padding-left: 15%!important;");
                                                                                  }else
                                                                                jQuery("ul#menu-productos-paginas").attr("style","padding-left: 0%!important;"); //6%
                                                                          }else{}
                                                                          
                                                                         }else{
                                                        
                                                                         }
                                                                         if(pageURL != url_home){
                                                                                //     jQuery("#Top_bar .search_wrapper").attr("style","margin-top: 94px; left: 109px !important;");
                                                                                if(ventana_ancho >= 1240){
                                                                                        jQuery("#menu-productos-paginas").attr("style","border-right: 500px solid #FDFBFF; border-left: 500px solid #FDFBFF;");
                                                                                }else{}
                                                                                    
                                                                                }else{}

                                                                                if(pageURL == url_home){
                                                                                        if(ventana_ancho >=1240 && ventana_ancho <=1300){
                                                                                                jQuery("#menu-productos-paginas").addClass("index-complicado");
                                                                                        }else if(ventana_ancho >= 1310 && ventana_ancho <= 1500){
                                                                                                jQuery("#menu-productos-paginas").addClass("index-complicado-laptop");
                                                                        
                                                                                        }else if(ventana_ancho >=1551){
                                                                                                jQuery("#menu-productos-paginas").addClass("index-grande");
                                                                                        }else{}
                                                                                }else{
                                                                        
                                                                                }
                                                            });
                                                           
       if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 
        // jQuery(window).scroll(function () {
        //         jQuery(window).scroll(function () {
        //                 if((jQuery("#Top_bar").hasClass("is-sticky"))) {
        //                         jQuery(".social").attr("style"," top: 87px;");
        //                 }else{
        //                         jQuery(".social").attr("style"," top: 72px;");
        //                 }
        //         })
        // });

          if(ventana_ancho >= 1420 ){
                 if(window.location.href.indexOf("/?s=") >= 0){
                //     console.log("inside");
         jQuery(".social").attr("style","left: 89% !important;");
         jQuery(window).scroll(function () {
                if((jQuery("#Top_bar").hasClass("is-sticky"))) {
                        jQuery(".social").attr("style","left: 89% !important; top: 87px;");
                      }else{
                        jQuery(".social").attr("style","left: 89% !important; top: 72px;");
                      }
         });
        
               }
             
       }
}
      
      jQuery(window).scroll(function () {
     
      if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){ 

       
        if(ventana_ancho >= 1420 && ventana_ancho <= 1435){
                        // console.log("sticky");
                        if (jQuery("#Top_bar").hasClass("is-sticky")) {
                               
                                jQuery(".social").attr("style","justify-content: flex-end !important; top: 87px !important;");
                               
                                if(window.location.href.indexOf("/?s=") >= 0){
                                    
                                  jQuery("nav#secondary-menu").attr("style"," border-left: 113px solid #fdfbff !important; border-right: 113px solid #fdfbff; left: -23%; top: 60px; ");   
                                  jQuery(".social").attr("style","left: 89% !important;");
  
                                }
                        }else{
                               
                                jQuery(".social").attr("style","justify-content: flex-end !important; top: 72px; !important;");
                                jQuery("nav#secondary-menu").attr("style"," border-left: 113px solid #fdfbff !important; border-right: 113px solid #fdfbff; left: -23%; top: 89px;");
                        }
        }
      }
   });

   
});




