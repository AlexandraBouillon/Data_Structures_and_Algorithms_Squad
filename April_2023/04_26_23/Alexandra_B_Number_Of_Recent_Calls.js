var RecentCounter = function() {
    this.call = []
  };

  RecentCounter.prototype.ping = function(t) {
    this.call.push(t);

    while(this.call[0] < t - 3000){
      this.call.shift()
    }
    return this.call.length
  };
