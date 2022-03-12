    const ResBtn = document.getElementById('resBtn');


    const Convert = () =>{

        const numValue = document.getElementById("numValue").value;
        const Units = document.getElementById("units");
        const unitValue = units.options[Units.selectedIndex].value;
        const ResultContainer = document.getElementById('resultContainer');

        const cmToFeet = (centi) =>{
            let feet = (centi/30.48);
            return feet.toFixed(4);
        }

        const cmToInch = (centi) =>{
            let Inch = (centi/2.54);
            return Inch.toFixed(4);
        }
        
        const cmToMtr = (centi) =>{
            let meter = (centi/100);
            return meter.toFixed(4);
        }
        
        const cmToMimtr = (centi) =>{
            let Mimtr = (centi*10);
            return Mimtr.toFixed(4);
        }
        
        const cmToKm = (centi) =>{
            let Kilomtr = (centi/100000);
            return Kilomtr.toFixed(4);
        }




        let resultValue;

        if(unitValue == 'feet'){
            resultValue = cmToFeet(numValue);
            ResultContainer.innerHTML = `= ${resultValue} feet`;
        }
        else if(unitValue == 'inch'){
            resultValue = cmToInch(numValue);
            ResultContainer.innerHTML = `= ${resultValue} Inch`;
        }
        else if(unitValue == 'meter'){
            resultValue = cmToMtr(numValue);
            ResultContainer.innerHTML = `= ${resultValue} Meter`;
        }
        else if(unitValue == 'mmeter'){
            resultValue = cmToMimtr(numValue);
            ResultContainer.innerHTML = `= ${resultValue} Millimeter`;
        }
        else if(unitValue == 'kilom'){
            resultValue = cmToKm(numValue);
            ResultContainer.innerHTML = `= ${resultValue} Kilometer`;
        }
        else{
            console.log(`Not Valid`);
        }

    }


    ResBtn.addEventListener('click',Convert);