function getHint(secret, guess) {
    let bull = 0;
    let cow = 0;
    const map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]){
            bull++
        }
        else {
            if (++map[secret[i]] <= 0) cow++;
            if (--map[guess[i]] >= 0) cow++;
        }
    }
    return `${bull}A${cow}B`;
  }
