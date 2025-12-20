// ConditionsMenu
// ButtonExportPdf
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PdfActionsCondition = ({ viewUrl, viewUrlDelivery, downloadUrl }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* ГОЛОВНА КНОПКА */}
      <button
        onClick={toggleMenu}
        style={{
          padding: "8px 8px",
          background: "rgba(255, 255, 255, 0.6);",
          color: "#100e0eff",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "800",
          minWidth: "220px",
        }}
      >
        {/* Умови співпраці */}
        {t("footernav.footerTerms")}
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
              {/* 📄 Переглянути Договір PDF */}
              {t("footernav.footerView")}
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
              📄
              {/* Переглянути умови доставки PDF */}
              {t("footernav.footerViewDel")}
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
              ⬇️
              {/* Завантажити Договір PDF */}
              {t("footernav.footerViewDown")}
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfActionsCondition;
