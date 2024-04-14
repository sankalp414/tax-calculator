const form = document.getElementById('form');
const income = document.getElementById('income');
const extraIncome = document.getElementById('extraIncome');
const ageGroup = document.getElementById('ageGroup');
const totalDeduction = document.getElementById('totalDeduction');
const result = document.getElementById('results');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');


form.addEventListener('submit', e => {
  e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
  const incomeValue = parseInt(income.value);
	const extraIncomeValue = parseInt(extraIncome.value);
	const ageGroupValue = parseInt(ageGroup.value);
	const totalDeductionValue = parseInt(totalDeduction.value);
	
	if(incomeValue === ''  || isNaN(incomeValue)) {
    setErrorFor(income, 'Username cannot be blank');
	}else {
    setSuccessFor(income)
  }
	
	if(extraIncomeValue === '' || isNaN(extraIncomeValue) ) {
    setErrorFor(extraIncome, 'Email cannot be blank');
	} else {
    setSuccessFor(extraIncome)
  }
	
	if(ageGroupValue === 0) {
    setErrorFor(ageGroup, 'Password cannot be blank');
	} else {
    setSuccessFor(ageGroup)
  }
	
	if(totalDeductionValue === '' || isNaN(totalDeductionValue)) {
    setErrorFor(totalDeduction, 'Password2 cannot be blank');
	} else{
    setSuccessFor(totalDeduction)
  }
  
  // setSuccessFor(ageGroupValue)
  let tax = 0;
  // console.log(grossIncome);
  // setSuccessFor(incomeValue)
  let totalIncome = incomeValue + extraIncomeValue - totalDeductionValue;
  console.log(totalIncome);
  let taxedIncome=0;
  // console.log(taxedIncome);
  if (totalIncome > 800000) {
    if (ageGroupValue === 40) {
      tax = 0.3 * (totalIncome - 800000);
      taxedIncome = totalIncome-tax;
      console.log(taxedIncome);
      result.innerHTML= `<span>${taxedIncome}</span>`
    } else if (ageGroupValue === 50) {
      tax = 0.4 * (totalIncome - 800000);
      taxedIncome = totalIncome-tax;
      console.log(taxedIncome);
      result.innerHTML= `<span>${taxedIncome}</span>`
    } else if (ageGroupValue === 60) {
      tax = 0.1 * (totalIncome - 800000);
      taxedIncome = totalIncome-tax;
            console.log(taxedIncome);
            result.innerHTML= `<span>${taxedIncome}</span>`
          }
        }else {
            
          result.innerHTML= `<span>${totalIncome}</span>`
        }
        
      }
      
      function setErrorFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        
      }
      
      function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
      }
      
      // function showModal(result) {
        //     const resultDiv = document.getElementById('results');
        //     resultDiv.innerHTML = `Tax Amount: ${result} Lakhs`;
        //     modal.style.display = 'block';
        //   }
        
        //   closeBtn.addEventListener('click', function() {
          //     modal.style.display = 'none';
          //   });
         
          openBtn.addEventListener('click',()=>{
         
              
              modal.classList.add("open");
         
            
            
            
         
          });
          closeBtn.addEventListener('click',()=>{
            modal.classList.remove("open");
          });
          
          
          
          
          


          
          

          


