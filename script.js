*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:linear-gradient(135deg,#667eea,#764ba2);
    min-height:100vh;
    padding:40px;
}

header h1{
    text-align:center;
    color:white;
    font-size:50px;
    margin-bottom:40px;
}

.gallery{
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
}

.product{
    background:white;
    width:300px;
    padding:20px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
    transition:0.4s;
}

.product:hover{
    transform:translateY(-10px);
}

.product img{
    width:100%;
    border-radius:15px;
}

.product h3{
    margin:15px 0;
    font-size:24px;
}

.price{
    color:#ff4b5c;
    font-size:28px;
    font-weight:bold;
    margin-bottom:15px;
}

button{
    background:#667eea;
    color:white;
    border:none;
    padding:12px 25px;
    border-radius:30px;
    cursor:pointer;
    font-size:16px;
    transition:0.3s;
}

button:hover{
    background:#4b5bdc;
}