$(document).ready(function() {
    var coins = {
        "bitcoin": document.getElementById("bit"),
        "ethereum": document.getElementById("eth"),
        "dogecoin": document.getElementById("doge"),
        "ripple": document.getElementById("xrp"),
        "litecoin": document.getElementById("ltc"),
        "cardano": document.getElementById("ada"),
        "polkadot": document.getElementById("dot"),
        "chainlink": document.getElementById("link"),
        "binancecoin": document.getElementById("bnb"),
        "solana": document.getElementById("sol"),
        "uniswap": document.getElementById("uni"),
        "stellar": document.getElementById("xlm"),
        "vechain": document.getElementById("vet"),
        "tron": document.getElementById("trx"),
        "cosmos": document.getElementById("atom"),
        "tezos": document.getElementById("xtz"),
        "monero": document.getElementById("xmr"),
        "aave": document.getElementById("aave"),
        "theta": document.getElementById("theta"),
        "eos": document.getElementById("eos"),
        "filecoin": document.getElementById("fil"),
        "neo": document.getElementById("neo")
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Cripple%2Ccardano%2Cpolkadot%2Cchainlink%2Cbinancecoin%2Csolana%2Cuniswap%2Cstellar%2Cvechain%2Ctron%2Ccosmos%2Ctezos%2Cmonero%2Caave%2Cthetanetwork%2Ceos%2Cfilecoin%2Cneo&vs_currencies=usd",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
        for (var key in coins) {
            if (coins.hasOwnProperty(key) && response[key]) {
                coins[key].innerHTML = "$" + response[key].usd;
            }
        }
    });
});

 
    document.addEventListener('DOMContentLoaded', function () {
        const coins = document.querySelectorAll('.coin');

        const animateOnScroll = () => {
            coins.forEach(coin => {
                const rect = coin.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    coin.style.opacity = '1'; // Ensure the element is visible
                }
            });
        };

        // Initial check
        animateOnScroll();

        // Check again on scroll
        window.addEventListener('scroll', animateOnScroll);
    });


  