function ProfileManager()
{
	this.init = function()
	{
		this.currProfileIndex = -1;
		this.profiles = 
		[
			["terrain"],
			["lines"],
			["terrain"],
			["terrain"],
			["terrain"],
		];
	};

	this.loadProfile = function( a_index )
	{
		var numProfiles = this.profiles.length;

		// hide all other profile texts
		for( var i = 0; i < numProfiles; i++ )
		{
			var currProfileName = "profile_" + i;
			var divElem = $("#"+currProfileName);
			divElem.css("display", "none");
		}

		// enable current profile1
		$("#profile_" + a_index).css("display", "block");

		// deactivate all objects
		g_objs.deactivateAllObjs();

		// activate target profile
		var profile = this.profiles[a_index];
		for ( var i = 0; i < profile.length; i++ )
		{
			g_objs.activateObj(profile[i]);
		}

		this.currProfileIndex = a_index;
	};

	this.loadNextProfile = function()
	{
		var numProfiles = this.profiles.length;
		var nextProfileIndex = (this.currProfileIndex+1) % numProfiles; 
		this.loadProfile(nextProfileIndex);
	};

	this.loadPrevProfile = function()
	{
		var numProfiles = this.profiles.length;
		var prevProfileIndex = (this.currProfileIndex-1) % numProfiles; 

		if ( prevProfileIndex < 0 )
		{
			prevProfileIndex = numProfiles-1;
		}
		this.loadProfile(prevProfileIndex);
	};
}

window.onkeyup = function( event ) {
	var spaceKeyCode = 32;
	var arrowRightKeyCode = 39;
	var arrowLeftKeyCode = 37;

	if ( event.keyCode == spaceKeyCode || event.keyCode == arrowRightKeyCode )
	{
		g_profiles.loadNextProfile();
	}
	else if ( event.keyCode == arrowLeftKeyCode )
	{
		g_profiles.loadPrevProfile();
	}
};