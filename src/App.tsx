import { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import "./App.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 650,
  bgcolor: "background.paper",
  outline: "none",
};

interface Image {
  title: string;
  img: string;
}

function Card({ open }: { open: Image | null }) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 20);
  }, []);
  return (
    <Box sx={{ ...style }}>
      <div
        className={`title ${fade ? "fade" : ""} ${
          open?.title === "ethereal" ? "white-text" : ""
        }`}
      >
        {open?.title}
      </div>
      <img className="card-image" src={open?.img} />
    </Box>
  );
}

export default function App() {
  const [open, setOpen] = useState<Image | null>(null);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 150)
      );
    }
  }, []);

  useEffect(() => {
    function handleKeyup(e: { code: string }) {
      if (!!open) {
        if (e.code === "ArrowLeft") {
          const i = itemData.findIndex((x) => x.img === open.img);
          setOpen((s) => itemData[i === 0 ? itemData.length - 1 : i - 1]);
        }
        if (e.code === "ArrowRight") {
          const i = itemData.findIndex((x) => x.img === open.img);
          setOpen((s) => itemData[i === itemData.length - 1 ? 0 : i + 1]);
        }
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keyup", handleKeyup);
    }
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [open]);

  return (
    <>
      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card open={open} />
      </Modal>
      <Box sx={{ width: "88vw", minHeight: 829 }}>
        <div className={`logo ${small ? "invert" : ""}`}>
          &nbsp;&nbsp;Michelle Kwong <span>Portfolio</span>
        </div>
        <Box sx={{ marginBottom: "20px" }}>&nbsp;</Box>
        <Masonry columns={{ xs: 2, sm: 3 }} spacing={{ xs: 2, sm: 1 }}>
          {itemData.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpen(item)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </>
  );
}

const itemData = [
  {
    img: "https://imgur.com/Pkbydys.jpg",
    title: "嫲嫲",
  },
  {
    img: "https://imgur.com/GFggusN.jpg",
    title: "exhalation",
  },
  {
    img: "https://imgur.com/XFz970l.jpg",
    title: "heart",
  },
  {
    img: "https://imgur.com/CS74w36.jpg",
    title: "notorious",
  },
  {
    img: "https://imgur.com/hXzeqXK.jpg",
    title: "her",
  },

  {
    img: "https://imgur.com/dUWlbQL.jpg",
    title: "",
  },
  {
    img: "https://imgur.com/xmIldyF.jpg",
    title: "bare bones",
  },
  {
    img: "https://imgur.com/OAUTbcE.jpg",
    title: "ethereal",
  },
  {
    img: "https://imgur.com/p9wzELA.jpg",
    title: "recovery",
  },
  {
    img: "https://imgur.com/A6HfyCV.jpg",
    title: "intimacy",
  },
  {
    img: "https://imgur.com/Br6NqTS.jpg",
    title: "she",
  },
];
