function recomendar(puesto){
    let posicion = document.getElementById("puesto").value;
    let recomendacion = document.getElementById("recomendacion")

    switch(puesto){
        case 'Checo Perez':
            if(posicion == 1){
                recomendacion.textContent = "Si Checo queda 1ero, ganas 30000 pesos";
            } else{
                if(posicion == 2){
                    recomendacion.textContent = "Si Checo queda 2do ganas 10000 pesos";
                } else if(posicion >= 3){
                    recomendacion.textContent = "No ganas nada";
                }

                }
    
            break;
            case 'Verstappen':
                if(posicion == 1){
                    recomendacion.textContent = "Si Max queda 1ero, no ganas nada";
                } else{
                    if(posicion == 2){
                        recomendacion.textContent = "Si Max queda 2do, no ganas nada";
                    } else if(posicion >= 3){
                        recomendacion.textContent = "Ganas 8000 pesos";
                    }
    
                    }
                    break;
                   
                    case 'Sainz':
                    if(posicion == 1){
                        recomendacion.textContent = "Si Sainz queda 1ero, ganas 20000 pesos";
                    } else{
                        if(posicion == 2){
                            recomendacion.textContent = "Si Sainz queda 2do, ganas 2000";
                        } else if(posicion >= 3){
                            recomendacion.textContent = "Ganas 100 pesos";
                        }
        
                        }
                        break;     
                        case 'Hamilton':
                            if(posicion == 1){
                                recomendacion.textContent = "Si Hamilton queda 1ero, ganas 100000 pesos";
                            } else{
                                if(posicion == 2){
                                    recomendacion.textContent = "Si Hamilton queda 2do, ganas 30000 pesos";
                                } else if(posicion >= 3){
                                    recomendacion.textContent = "Ganas 8000 pesos";
                                }
                
                                }
                                
                                break;         
                            }
    
            }