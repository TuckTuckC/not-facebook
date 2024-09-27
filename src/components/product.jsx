const product = () => {
    
    const type = 'sub';
    let name = 'CompC';
    let brand = 'Kicker';
    let price = 89.99;
    let size = '12"'
    let rms = 300;
    let peak = 600;
    let description = 'Enjoy every bit of bass from your car stereo with this Stillwater Designs subwoofer. The 12-inch CompC voice coil subwoofer is compatible with a range of setups and offers 4 ohms impedance for reliable sound. The ribbed polyurethane surround on this Stillwater Designs subwoofer eliminates unwanted vibrations, and the classic yellow stitching adds a bit of style.'
    let reviews = ['Awesome', 'Great', 'It Sucks, do not buy it', 'It is a beast, buy it']

    return (
        <div>
            <h1>{brand}{name}</h1>
            <p>${price}</p>
            <p>Size: {size}</p>
            <p>RMS: {rms}</p>
            <p>Peak Wattage: {peak}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default product;