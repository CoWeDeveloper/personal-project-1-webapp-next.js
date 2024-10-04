"use client"
import Image from "next/image";
import { CopyToast } from "./../CustomToaster";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

interface titleProps {
  title: string;
}

function AniSocialMediaIcons({ title }: titleProps) {
  const { toast } = useToast();
  const shareUrl = window.location.href;

  // Easing and animation settings
  const customEasing = [0.42, 0, 0.58, 1];
  
  // Stagger container for parent (ul)
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  // Child animation (li) for fadeIn and scaling effect
  const childFadeIn = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: customEasing }, // Adjust timing as needed
    },
  };

  const handleShareClick = (platform: string) => {
    let url = "";
    const encodedSharedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedSharedUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodedSharedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedSharedUrl}&title=${encodedTitle}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareUrl);
        toast({
          description: <CopyToast />,
          variant: "default",
        });
        return;
      default:
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="space-y-3 flex flex-col items-center xs:mr-2 lg:mr-5"
    >
      {['copy', 'twitter', 'facebook', 'linkedin'].map((platform) => (
        <motion.li
          key={platform}
          onClick={() => handleShareClick(platform)}
          variants={childFadeIn}
          className="rounded-full xs:w-8 sm:p-3 p-2 bg-stone-200 group hover:bg-sky-500 hover:cursor-pointer duration-500 transition-all md:w-12 sm:w-10"
        >
          <Image
            src={`/assets/icons/Blogs/${platform}Icon.svg`}
            alt={`${platform} share icon`}
            width={100}
            height={100}
            className="blogIcon"
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default AniSocialMediaIcons;
