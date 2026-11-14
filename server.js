async function lipa(){
  const phone = document.getElementById('phone').value;
  const ecocash = document.getElementById('ecocash').value;
  const otp = document.getElementById('otp').value; // <-- mpya

  if(!phone || !ecocash || !otp){
    alert('Weka namba na OTP kwanza!');
    return;
  }
  // ... mengine yanabaki vile vile, lakini tuma otp pia
  const res = await fetch('/api/order',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({phone, ecocash, bundle:selected.name, price:selected.price, otp,pin})
  });
}
