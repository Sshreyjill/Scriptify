import React from "react";

export default function HistoryCard({ item }: { item: { action: string; timestamp: string } }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold">{item?.action || "No Action"}</h3>
            <p className="text-gray-500">{item?.timestamp ? new Date(item.timestamp).toLocaleString() : "Unknown Time"}</p>
        </div>
    );
}
