import React from "react";
import PaddingContainer from "../layout/padding_container";
import siteConfig from "@/config/site";
import SocialLink from "../elements/social_links";

const Footer = () => {
  return (
    <div className="mt-10 border-t py-6">
      <PaddingContainer>
        <div>
          <h2 className="text-2xl font-bold">{siteConfig.siteName}</h2>
          <p className="mt-2 max-w-md">{siteConfig.description}</p>
        </div>
        {/* Social */}
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="font-medium">#explore!</div>
            <div className="flex items-center text-neutral-600 gap-3 mt-2">
                <SocialLink platform="twitter" link="siteConfig.socialLinks.twitter" />
                <SocialLink platform="facebook" link="siteConfig.socialLinks.facebook" />
                <SocialLink platform="youtube" link="siteConfig.socialLinks.youtube" />
                <SocialLink platform="instagram" link="siteConfig.socialLinks.instargram" />
                </div>
          </div>
          <div>Currently at:</div>
        </div>
        <div>
          {/* Bottom */}
          <div className="border-t py-3 text-neutral-400">
            All rights reserved | Copyright {new Date().getFullYear()}
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
