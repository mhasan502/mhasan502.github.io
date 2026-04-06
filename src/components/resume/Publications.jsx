import styles from "@site/src/css/resume.module.css";
import { useEffect, useRef, useState } from "react";
import {RiDraftLine} from "react-icons/ri";
import { publicationsData } from "./data/publicationsData";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

function clampZoom(value) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

export default function Publications() {
  const [activeImage, setActiveImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  function resetTransform() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsDragging(false);
    dragStateRef.current.pointerId = null;
  }

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    resetTransform();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
        return;
      }
      if (event.key === "+" || event.key === "=") {
        setZoom((prev) => clampZoom(prev + ZOOM_STEP));
        return;
      }
      if (event.key === "-") {
        setZoom((prev) => clampZoom(prev - ZOOM_STEP));
        return;
      }
      if (event.key === "0") {
        resetTransform();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  useEffect(() => {
    if (zoom <= MIN_ZOOM) {
      setOffset({ x: 0, y: 0 });
    }
  }, [zoom]);

  function handleWheelZoom(event) {
    event.preventDefault();
    const delta = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
    setZoom((prev) => clampZoom(prev + delta));
  }

  function handlePointerDown(event) {
    if (zoom <= MIN_ZOOM) {
      return;
    }

    event.preventDefault();
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  }

  function handlePointerMove(event) {
    if (!isDragging || dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;
    const deltaY = event.clientY - dragStateRef.current.startY;
    setOffset({
      x: dragStateRef.current.originX + deltaX,
      y: dragStateRef.current.originY + deltaY,
    });
  }

  function handlePointerEnd(event) {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragStateRef.current.pointerId = null;
    setIsDragging(false);
  }

  function handleLostPointerCapture() {
    dragStateRef.current.pointerId = null;
    setIsDragging(false);
  }

  return (
    <div id="publications" className="container">
      <SectionHeader icon={RiDraftLine} title="Publications" iconSize={28}/>
      <div className={styles.publicationCard__list}>
        {publicationsData.map((pub, idx) => (
          <article key={pub.id} className={styles.publicationCard}>
            <div className={styles.publicationCard__topRow}>
              <span className={styles.publicationCard__index}>{idx + 1}</span>
              <span className={styles.publicationCard__journalPill}>{pub.journal}</span>
            </div>

            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.publicationCard__titleLink}
            >
              <h3 className={styles.publicationCard__title}>{`“${pub.title}”`}</h3>
            </a>

            <p className={styles.publicationCard__authors}>
              {pub.authors.map((author, authorIndex) => (
                <span key={author.name}>
                  {author.bold ? <strong>{author.name}*</strong> : author.name}
                  {authorIndex < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </p>

            <div className={styles.publicationCard__body}>
              <div className={styles.publicationCard__details}>
                <BulletList items={pub.details} itemClassName={styles.publicationCard__bullet__item}/>
              </div>

              <figure className={styles.publicationCard__figure}>
                <button
                  type="button"
                  className={styles.publicationCard__imageButton}
                  onClick={() =>
                    setActiveImage({
                      src: pub.image.src,
                      alt: pub.image.alt,
                      title: pub.title,
                    })
                  }
                  aria-label={`Open image preview for ${pub.title}`}
                >
                  <img
                    className={styles.publicationCard__img}
                    src={pub.image.src}
                    alt={pub.image.alt}
                  />
                </button>
                <figcaption className={styles.publicationCard__figcaption}>{pub.journal}</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>

      {activeImage && (
        <div
          className={styles.publicationModal}
          role="dialog"
          aria-modal="true"
          aria-label="Publication image preview"
          onClick={() => setActiveImage(null)}
        >
          <div className={styles.publicationModal__content} onClick={(event) => event.stopPropagation()}>
            <div className={styles.publicationModal__toolbar}>
              <div className={styles.publicationModal__zoomTools}>
                <button
                  type="button"
                  className={styles.publicationModal__toolButton}
                  onClick={() => setZoom((prev) => clampZoom(prev - ZOOM_STEP))}
                  aria-label="Zoom out"
                >
                  -
                </button>
                <span className={styles.publicationModal__zoomLabel}>{`${Math.round(zoom * 100)}%`}</span>
                <button
                  type="button"
                  className={styles.publicationModal__toolButton}
                  onClick={() => setZoom((prev) => clampZoom(prev + ZOOM_STEP))}
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  className={styles.publicationModal__toolButton}
                  onClick={resetTransform}
                  aria-label="Reset zoom and position"
                >
                  Reset
                </button>
              </div>

              <button
                type="button"
                className={styles.publicationModal__close}
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
              >
                X
              </button>
            </div>

            <div
              className={`${styles.publicationModal__viewport} ${zoom > 1 ? styles.publicationModal__viewport__zoomed : ""} ${isDragging ? styles.publicationModal__viewport__dragging : ""}`}
              onWheel={handleWheelZoom}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={handlePointerEnd}
              onLostPointerCapture={handleLostPointerCapture}
            >
              <img
                className={styles.publicationModal__img}
                src={activeImage.src}
                alt={activeImage.alt}
                draggable={false}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                }}
              />
            </div>

            <p className={styles.publicationModal__caption}>{activeImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
