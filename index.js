alert('what');
(function () {

    window.updateSlime = function updateSlime() {
        var slime = document.querySelector("#Slime");

        var tlWidth, tlHeight, trWidth, trHeight, brWidth, brHeight, blWidth, blHeight;
        tlWidth = document.querySelector("#TLWidth").value * 2;
        tlHeight = document.querySelector("#TLHeight").value * 2;
        trWidth = document.querySelector("#TRWidth").value * 2;
        trHeight = document.querySelector("#TRHeight").value * 2;
        blWidth = document.querySelector("#BLWidth").value * 2;
        blHeight = document.querySelector("#BLHeight").value * 2;
        brWidth = document.querySelector("#BRWidth").value * 2;
        brHeight= document.querySelector("#BRHeight").value * 2;

        slime.style.setProperty('border-radius',`${tlWidth}% ${trWidth}% ${brWidth}% ${blWidth}%  / ${tlHeight}% ${trHeight}% ${brHeight}% ${blHeight}%`);

    };
}());