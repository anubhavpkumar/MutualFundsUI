const CustomLogger = {
    LogError: function(err, location){
        console.error("Error in: ", location);
        console.error("Error Message: ", err);
    }
}