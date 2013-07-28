package com.example.deckergap;




import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.JsPromptResult;
import android.webkit.WebView;

import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap
{
	public void onCreate(Bundle savedInstanceState)
	{
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
			
		
		
	}

	public boolean onCreateOptionsMenu(Menu menu)
	{
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
