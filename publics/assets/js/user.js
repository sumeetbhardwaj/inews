//users scripts start
jQuery(document).on("click", "#userSign", function(e){
    e.preventDefault();
    jQuery(".error").html("");
    var name = jQuery("#fname").val();
    var email = jQuery("#email").val();
    var password = jQuery("#password").val();
    
    var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    emailCheck = emailVal.test(String(email).toLowerCase());

    ValCheck = true;

    if(name == "") {
        jQuery(".nameError").html("Please Enter Your Name");
    }
    if(email == "") {
        jQuery(".emailError").html("Please Enter Your Email");
    }else if( !emailCheck ) {
        jQuery(".emailError").html("Please Enter Your Vailed Email");
        ValCheck = false;
    }
    if(password == "") {
        jQuery(".passwordError").html("Please Enter Your Password");
    } else if(password.length<6) {
        jQuery(".passwordError").html("Please Enter Minmum 6 character Password");
        ValCheck = false;
    }
    if(name && email && password && ValCheck == true){
        jQuery.post("/register",
         {
            fname: name,
            email: email,
            password: password
         },
        function (data, status) {
            if(data.errorMessage){
                jQuery(".emailError").html(data.errorMessage);
            }else{
                jQuery(".successMessage").html(data.successMessage);
                jQuery(".userRegister")[0].reset();
                setTimeout( () => {
                    window.location.href = "/login"
                },2000);
            }
        });
    }
});

jQuery(document).on("click", "#userLogin", function(e){
    e.preventDefault();
    jQuery(".error").html("");
    var email = jQuery("#email").val();
    var password = jQuery("#password").val();

    if(email == "") {
        jQuery(".emailError").html("Please Enter Your Email");
    }
    if(password == "") {
        jQuery(".passwordError").html("Please Enter Your Password");
    } 

    if(email && password) {
        jQuery.post("/login",
         {
            email: email,
            password: password
         },
        function (data, status) {
            if(data.errorMessage) {
                jQuery(".errorMessage").html(data.errorMessage);
            } else {
               window.location.href = "/deshboard"
            }
        });
    }
})
//users scripts end
//category scripts start
jQuery(document).on("click", "#addCategory", function(e){
    e.preventDefault();
    jQuery(".error").html("");
    var categoryName = jQuery("#categoryName").val();
    if(categoryName == "") {
        jQuery(".categoryError").html("Please Enter Category Name");
    } else {
        jQuery.post("/admin/add-category",
        {
           name: categoryName
        },
       function (data, status) {
           if(data.errorMessage) {
               jQuery(".categoryError").html(data.errorMessage);
           } else {
              jQuery(".successMessage").html(data.successMessage);
                jQuery(".addCategoryForm")[0].reset();
                setTimeout( () => {
                    window.location.href = "/admin/categories"
                },2000);
           }
       });
    }
})

jQuery(document).on("click", "#udateCategory", function(e){
    e.preventDefault();
    jQuery(".error").html("");
    var catId = jQuery("#categoryId").val();
    var categoryName = jQuery("#categoryName").val();
    if(categoryName == "") {
        jQuery(".categoryError").html("Please Enter Category Name");
    } else {
        jQuery.post("/admin/update-category",
        {
            _id: catId, 
           name: categoryName
        },
       function (data, status) {
           if(data.errorMessage) {
               jQuery(".categoryError").html(data.errorMessage);
           } else {
              jQuery(".successMessage").html(data.successMessage);
                jQuery(".addCategoryForm")[0].reset();
                setTimeout( () => {
                    window.location.href = "/admin/categories"
                },2000);
           }
       });
    }


})
//category scripts end