import Script from "next/script";

const AdSense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173260918120839`}
    />
  );
};

export default AdSense;
