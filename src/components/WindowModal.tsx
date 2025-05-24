import React, { useState } from "react";
import { Modal } from "antd";
import { ICONS } from "@/constants/image";

interface WindowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

const WindowModal: React.FC<WindowModalProps> = ({
  isOpen,
  onClose,
  onMinimize,
  onMaximize,
  title = "Window",
  children,
  width = 800,
  height = 600,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize?.();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      width={isMaximized ? "100vw" : width}
      title={
        <div className="windowTitlebar">
          <span className="title">{title}</span>
          <div className="windowControls">
            <button
              className="windowBtn"
              onClick={onMinimize}
              aria-label="Minimize"
              tabIndex={-1}
              type="button"
            >
              <img src={ICONS.MINUS} alt="Minimize" />
            </button>
            <button
              className="windowBtn"
              onClick={handleMaximize}
              aria-label={isMaximized ? "Restore" : "Maximize"}
              tabIndex={-1}
              type="button"
            >
              <img src={ICONS.MAXIMIZE} alt="Maximize" />
            </button>
            <button
              className="windowBtn close"
              onClick={onClose}
              aria-label="Close"
              tabIndex={-1}
              type="button"
            >
              <img src={ICONS.X} alt="Close" />
            </button>
          </div>
        </div>
      }
      closeIcon={false}
      className={`window-modal ${
        isMaximized ? "window-modal-maximized" : "window-modal-default"
      }`}
      bodyStyle={{
        height: !isMaximized ? height : undefined,
      }}
    >
      <div className="modalContent">{children}</div>
    </Modal>
  );
};

export default WindowModal;
