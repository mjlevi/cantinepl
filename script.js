                             // récupérer tous les plats
                             var plats = document.querySelectorAll("input[type='radio'][name^='produitlaitier'], input[type='radio'][name^='platchaud'], input[type='radio'][name^='dessert']");
                                
                             // désactiver les étoiles de vote pour les plats non sélectionnés
                             for (var i = 0; i < plats.length; i++) {
                                 plats[i].addEventListener("change", function() {
                                     var selectedPlat = document.querySelector("input[type='radio'][name='" + this.name + "']:checked");
                                     var stars = this.parentNode.querySelector(".stars");
                                     if (this !== selectedPlat) {
                                         stars.classList.add("disabled");
                                         stars.querySelectorAll("input[type='radio']").forEach(function(star) {
                                             star.disabled = true;
                                         });
                                     } else {
                                         stars.classList.remove("disabled");
                                         stars.querySelectorAll("input[type='radio']").forEach(function(star) {
                                             star.disabled = false;
                                         });
                                     }
                                 });
                             }
                                                                                             