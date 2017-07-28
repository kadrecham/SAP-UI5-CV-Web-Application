sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {

		handleImage1Press: function(evt) {
			window.open( "https://github.wdf.sap.corp/D069020/Monitoring-of-systems-status-via-LEDs","_blank");
		},
		handleImage2Press: function(evt) {
			window.open( "https://github.wdf.sap.corp/D069020/Web-Pages-Slider","_blank");
		},
		handleImage3Press: function(evt) {
			window.open( "https://github.wdf.sap.corp/D069020/Indoor-Location-Detection-Scenario","_blank");
		},
		handleImage4Press: function(evt) {
			window.open( "https://github.wdf.sap.corp/D069020/Wifi-Signal-Strength-Collector","_blank");
		},
		handleImage5Press: function(evt) {
			window.open( "https://github.wdf.sap.corp/D069020/Weather-Visualisation-Scenario-using-InfluxDB-Grafana","_blank");
		}
		
	});
});