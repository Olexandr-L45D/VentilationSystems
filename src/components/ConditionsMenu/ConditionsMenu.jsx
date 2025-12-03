// ConditionsMenu
// ButtonExportPdf
import { useState } from "react";

const PdfActionsCondition = ({ viewUrl, viewUrlDelivery, downloadUrl }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* ГОЛОВНА КНОПКА */}
      <button
        onClick={toggleMenu}
        style={{
          padding: "12px 20px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "800",
          minWidth: "220px",
        }}
      >
        Умови співпраці
      </button>

      {/* ВИПАДАЮЧЕ МЕНЮ */}
      {open && (
        <div
          style={{
            marginTop: "8px",
            position: "absolute",
            left: 0,
            bottom: 80,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "15px",
            minWidth: "220px",
            zIndex: 100,
          }}
        >
          {/* Кнопка перегляду */}
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#f7f7f7",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              📄 Переглянути Договір PDF
            </button>
          </a>
          {/* Кнопка перегляду умов доставки */}
          <a
            href={viewUrlDelivery}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#f7f7f7",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              📄 Переглянути умови доставки PDF
            </button>
          </a>

          {/* Кнопка завантаження */}
          <a href={downloadUrl} download style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#ededed",
                cursor: "pointer",
              }}
            >
              ⬇️ Завантажити Договір PDF
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfActionsCondition;
