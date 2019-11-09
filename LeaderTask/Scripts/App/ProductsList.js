﻿$(document).ready(function () {
    var Products = $("#ProductsContainer");
    var Useername = localStorage.Useername;
    var password = localStorage.password;
    
    var ApiUrl = "/api/Products/";


    $("#ProductsContainer").on("click", ".js-cart", function () {
        //if (Useername === "undefined") {
        ////    window.location.href = "/home/login";
        //    $("<a href='/home/login'></a>").click(); 
        //    console.log("Please Login")

        //}
        if ("Useername" in localStorage) {
            var button = $(this);
            var ProductId = button.attr("data-product-id");
            $.ajax({
                url: "/api/Cart/Add_RemoveToCart?ProductId=" + ProductId + "&amount=1&username=" + Useername,
                type: 'POST',
                headers: { 'Authorization': 'Basic ' + btoa(Useername + ':' + password) },
                dataType: 'json',
                success: function (data) {
                    alert("Product Added To Cart")
                }
            });

        } else {
            window.location.replace("/home/login");
        }



 
    });





     


    $.ajax({
        type: 'GET',
        url: '/api/Products',
         headers: { 'Authorization': 'Basic ' + btoa(Useername + ':' + password) },  
        success: function (data) {
            $.each(data, function (k, v) {
                Products.append(
                    ' <div class="col-md-4"><figure class="card card-product"><div class="col-md-12"><img style="width:100%;height:320px;"  src='
                    + v.Image + '></div><figcaption class="info-wrap"><h4 class="title">' + v.ProductName + '</h4><p class="desc">'
                    + v.ProductName + '</p> </figcaption>  <div class="bottom-wrap"> <a data-product-id=' + v.ProductID + '   class= "btn btn-sm btn-primary float-right js-cart">'
                    +'Add To Cart</a > <div class="price-wrap h5"><span class="price-new">'
                +v.UnitPrice+'</span > <del class="price-old"> </del></div></div> </figure></div>  '








                )




            });
           
        },
        error: function () {
        }
    });     

















    //var table = $("#Products").DataTable({
    //    ajax: {
    //        url: ApiUrl,
    //        dataSrc: ""
    //    },
    //    columns: [
    //        {
    //            data: "Image",
    //            render: function (data) { return '<img style=" height: 60px; " src=' + data + ' alt="Alternate Text" />' }
    //        },
    //        { data: "ProductName" },
    //        { data: "UnitPrice"  },
    //        { data: "UnitsInStock" },
    //        { data: "category.CategoryName" },
    //        {
    //            data: "ProductID",
    //            render: function (data) {
    //                return "<button class='btn-link js-delete' data-product-id=" + data + ">Delete</button>" +
    //                    "<button class='btn-link js-edit' data-product-id=" + data + ">Update</button>";
    //            }
    //        }
    //    ]
    //});
    //$.ajax({
    //        type: 'GET',
    //        url: '/api/categorys',
    //        success: function (data) {
    //            var options = $("#ProdCategory");
    //            $.each(data, function (k, v) {
    //                options.append('<option value =' + v.CategoryId + '>' + v.CategoryName + '</option >')
    //            });
    //            var options = $("#EProdCategory");
    //            $.each(data, function (k, v) {
    //                options.append('<option value =' + v.CategoryId + '>' + v.CategoryName + '</option >')
    //            });
    //        },
    //        error: function () {
    //        }
    //    });     
    //$('#createProductBTN').click(function () {
    //    var ProdName = $("#ProdName").val();
    //    var ProdPrice = $("#ProdPrice").val();
    //    var ProdStock = $("#ProdStock").val();
    //    var ProdCategory = $("#ProdCategory").val();
    //    var ProdImage = $("#ProdImage").val();
    //    $.ajax({
    //        url: ApiUrl,
    //        type: 'POST',
    //        dataType: 'json',
    //        data: {
    //            ProductName: ProdName,
    //            UnitPrice: ProdPrice,
    //            UnitsInStock: ProdStock,
    //            Image: ProdImage,
    //            CategoryId: ProdCategory
    //        },
    //        success: function (data) {
    //            $('#Products').DataTable().ajax.reload();
    //            $("#CreateProductModal").modal("hide");
    //        }
    //    });
    //});
    //$("#Products").on("click", ".js-edit", function () {
         
    //    var button = $(this);
    //    EditId = button.attr("data-product-id");
    //    $.ajax({
    //        url: ApiUrl + button.attr("data-product-id"),
    //        method: "GET",
    //        success: function (data) {                                                                   
                                                                                                                    
    //            $("#EProdName").val(data.ProductName);                                         
    //                 $("#EProdPrice").val(data.UnitPrice);                                           
    //                  $("#EProdStock").val(data.UnitsInStock);                                    
    //                $("#EProdCategory").val(data.CategoryId);                            
    //                $("#EProdImage").val(data.Image);    
    //                $("#EditProductModal").modal("show");
    //        }
    //    });
    //});
    //$('#EditProductBtn').click(function () {
    //    var ProdName = $("#EProdName").val();
    //    var ProdPrice = $("#EProdPrice").val();
    //    var ProdStock = $("#EProdStock").val();
    //    var ProdCategory = $("#EProdCategory").val();
    //    var ProdImage = $("#EProdImage").val();
    //    $.ajax({
    //        url: ApiUrl + EditId,
    //        type: 'PUT',
    //        dataType: 'json',
    //        data: {
    //            ProductName: ProdName,
    //            UnitPrice: ProdPrice,
    //            UnitsInStock: ProdStock,
    //            Image: ProdImage,
    //            CategoryId: ProdCategory
    //        },
    //        success: function (data) {
    //            EditId = 0;
    //            $('#Products').DataTable().ajax.reload();
    //            $("#EditProductModal").modal("hide");
    //        }
    //    });
    //});
    //$("#Products").on("click", ".js-delete", function () {
    //    var button = $(this);
    //    bootbox.confirm("Are you sure you want to delete this customer?", function (result) {
    //        if (result) {
    //            $.ajax({
    //                url: ApiUrl + button.attr("data-product-id"),
    //                method: "DELETE",
    //                success: function () {
    //                    $('#Products').DataTable().ajax.reload();
    //                }
    //            });
    //        }
    //    });
    //});
});
