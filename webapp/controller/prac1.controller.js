sap.ui.define([
    "sap/ui/core/mvc/Controller",'sap/m/MessageToast',"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,MessageBox) {
        "use strict";

        return Controller.extend("pracproject1.controller.prac1", {
            onInit: function () {

                var datalist={
                    FirstName:"Sreenivas",
                    LastName:"Goduguluri",
                    Location:"Bangalore",
                    Designation:"Team Lead"	     
              };
                var mymodel= new sap.ui.model.json.JSONModel(datalist);
                this.getView().setModel(mymodel,"Task");

            // var uri="/V3/northwind/northwind.svc";
            // var myModel= new sap.ui.model.odata.ODataModel(uri,true);
            // this.getView().byId("mylist").setModel(myModel);

            
            },


            onConfirmationMessageBoxPress: function () {
                MessageBox.confirm("Implementation of message box....");
            },
            onPress: function (evt) {
                 var a= evt.getSource().getId();
                MessageToast.show(" You Clicked Me......");
               
            },

            // onSubmit : function(){
            //     var allfilled = true;
            //     var empid= this.getView().byId("idempid").getValue();
            //     var name= this.getView().byId("idname").getValue();
            //     var level= this.getView().byId("idlevel").getValue();
            //     var email= this.getView().byId("idemail").getValue();
            //     var phone= this.getView().byId("idphone").getValue();
            //     var pincode= this.getView().byId("idpincode").getValue();

            //     this.getView().byId("idempid").setValueState("None");
            //     this.getView().byId("idname").setValueState("None");
            //     this.getView().byId("idlevel").setValueState("None");
            //     this.getView().byId("idemail").setValueState("None");
            //     this.getView().byId("idphone").setValueState("None");
            //     this.getView().byId("idpincode").setValueState("None");

            //     if(empid =="" || empid == undefined){
            //         allfilled = false;
            //         this.getView().byId("idempid").setValueState("Error");
            //         this.getView().byId("idempid").setValueStateText("enter value...");
            //     }
            //     if(name =="" || name == undefined){
            //         allfilled = false;
            //         this.getView().byId("idname").setValueState("Error");
            //         this.getView().byId("idname").setValueStateText("enter value...");
            //     }
            //     if(level =="" || level == undefined){
            //         allfilled = false;
            //         this.getView().byId("idlevel").setValueState("Error");
            //         this.getView().byId("idlevel").setValueStateText("enter value...");
            //     }
            //     if(email =="" || email == undefined){
            //         allfilled = false;
            //         this.getView().byId("idemail").setValueState("Error");
            //         this.getView().byId("idemail").setValueStateText("enter value...");
            //     }
            //     if(phone =="" || phone == undefined){
            //         allfilled = false;
            //         this.getView().byId("idphone").setValueState("Error");
            //         this.getView().byId("idphone").setValueStateText("enter value...");
            //     }
            //     if(pincode =="" || pincode == undefined){
            //         allfilled = false;
            //         this.getView().byId("idpincode").setValueState("Error");
            //         this.getView().byId("idpincode").setValueStateText("enter value...");
            //     }
            //     if(allfilled == false)
            //     {
            //         jQuery.sap.require("sap.m.MessageBox");
            //         sap.m.MessageBox.show("Please fill all fields",sap.m.MessageBox.Icon.ERROR,"ERROR");

            //     }
            // }

            onSubmit : function(){
                var allfilled = true;
                var allValid = true;
                var empid= this.getView().byId("idempid").getValue();
                var name= this.getView().byId("idname").getValue();
                var level= this.getView().byId("idlevel").getValue();
                var email= this.getView().byId("idemail").getValue();
                var phone= this.getView().byId("idphone").getValue();
                var pincode= this.getView().byId("idpincode").getValue();

                this.getView().byId("idempid").setValueState("None");
                this.getView().byId("idname").setValueState("None");
                this.getView().byId("idlevel").setValueState("None");
                this.getView().byId("idemail").setValueState("None");
                this.getView().byId("idphone").setValueState("None");
                this.getView().byId("idpincode").setValueState("None");

                if(empid =="" || empid == undefined){
                    allfilled = false;
                    this.getView().byId("idempid").setValueState("Error");
                    this.getView().byId("idempid").setValueStateText("enter value...");
                }
                else
                {
                    allValid=false;
                    var empid_regex = /^[0-9]+$/;
                    if(!empid.match(empid_regex) || empid.length != 8){
                        this.getView().byId("idempid").setValueState("Error");
                        this.getView().byId("idempid").setValueStateText("Please enter digits only of length 8");
                    }
                }
                if(name =="" || name == undefined){
                    allfilled = false;
                    this.getView().byId("idname").setValueState("Error");
                    this.getView().byId("idname").setValueStateText("enter value...");
                }
                else{
                    allValid=false;
                    var name_regex = /^[a-zA-Z\s']+$/;
                    if(!name.match(name_regex)){
                        this.getView().byId("idname").setValueState("Error");
                        this.getView().byId("idname").setValueStateText("employee name is not valid....");
                    }

                }
                if(level =="" || level == undefined){
                    allfilled = false;
                    this.getView().byId("idlevel").setValueState("Error");
                    this.getView().byId("idlevel").setValueStateText("enter value...");
                }
                else{
                    allValid=false;
                    var level_regex =/^[0-9]+$/;
                    if(!level.match(level_regex)){
                        this.getView().byId("idlevel").setValueState("Error");
                        this.getView().byId("idlevel").setValueStateText("Please enter valid level");
                    }
                }
                if(email =="" || email == undefined){
                    allfilled = false;
                    this.getView().byId("idemail").setValueState("Error");
                    this.getView().byId("idemail").setValueStateText("enter value...");
                }
                else{
                    allValid=false;
                    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if(!email.match(email_regex)){
                        this.getView().byId("idemail").setValueState("Error");
                        this.getView().byId("idemail").setValueStateText("Please enter correct email address");
                    }
                }
                if(phone =="" || phone == undefined){
                    allfilled = false;
                    this.getView().byId("idphone").setValueState("Error");
                    this.getView().byId("idphone").setValueStateText("enter value...");
                }
                else
                {
                    allValid=false;
                    var phone_regex = /^[0-9]+$/;
                    if(!phone.match(phone_regex) || phone.length != 10){
                        this.getView().byId("idphone").setValueState("Error");
                        this.getView().byId("idphone").setValueStateText("Please enter valid phone no.");
                    }
                }
                if(pincode =="" || pincode == undefined){
                    allfilled = false;
                    this.getView().byId("idpincode").setValueState("Error");
                    this.getView().byId("idpincode").setValueStateText("enter value...");
                }
                else
                {
                    allValid=false;
                    var pincode_regex = /^[0-9]+$/;
                    if(!pincode.match(/^[0-9]+$/) || pincode.length!=6)
                    {
                        this.getView().byId("idpincode").setValueState("Error");
                        this.getView().byId("idpincode").setValueStateText("Invalid Pin Code (Should be 6 Digits only)");
                    }
                }
                if(allfilled == false)
                {
                    jQuery.sap.require("sap.m.MessageBox");
                    sap.m.MessageBox.show("Please fill all fields",sap.m.MessageBox.Icon.ERROR,"ERROR");

                }
            
            },
            

            onPress1: function () {
                     
                     MessageToast.show(" Login Successful");
                   
                 },

                 press1:function(oEvent){
                    var route= sap.ui.core.UIComponent.getRouterFor(this);
                    route.navTo("view2");
                },



        });
    });
