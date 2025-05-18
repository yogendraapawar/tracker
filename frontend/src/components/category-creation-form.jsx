import React from 'react';
import categories from "../assets/placeholder-data/default-categories.js";

const CategoryCreationForm = ({ handleCategorySelection }) => {
    return (
        <div className ={"w-full"} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {categories.map((category) => (
                <div
                    key={category.categoryName}
                    style={{
                        backgroundColor: category.backgroundColor,
                        borderRadius: "12px",
                        padding: "12px 16px",
                        color: "#fff",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                    onClick={() => handleCategorySelection(category)}
                >
                    <span style={{ fontSize: "20px" }}>{category.emoji}</span>
                    <span>{category.categoryName}</span>
                </div>
            ))}
        </div>
    );
};

export default CategoryCreationForm;