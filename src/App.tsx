import { useState } from "react";
import { Box, Modal } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import "./App.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
};

interface Image {
  title: string;
  img: string;
}

export default function App() {
  const [open, setOpen] = useState<Image | null>(null);
  return (
    <>
      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <img
            style={{
              width: "100%",
            }}
            src={open?.img}
          />
          <Box style={{ color: "black", textAlign: "center" }}>
            {open?.title}
          </Box>
        </Box>
      </Modal>
      <Box sx={{ width: 500, minHeight: 829 }}>
        <h2>Michelle Kwong</h2>
        <h3>Portfolio</h3>
        <hr />
        <Box sx={{ marginBottom: "14px" }}>&nbsp;</Box>
        <Masonry columns={3} spacing={2}>
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
    title: "in sickness and in health",
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
