package com.example.deckergap;




import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap
{
	public void onCreate(Bundle savedInstanceState)
	{
		//super.setIntegerProperty("loadUrlTimeoutValue", 30000);
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/Login.html");  
			 
		   
	 	 
	}

	public boolean onCreateOptionsMenu(Menu menu)
	{
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
