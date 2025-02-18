"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection"; // Import TemplateListSection

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [isTemplateSelected, setIsTemplateSelected] = useState<boolean>(false);

  return (
    <div className="bg-black text-white min-h-screen p-5">
      {/* Search Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateListSection
        userSearchInput={userSearchInput}
        onTemplateSelect={() => setIsTemplateSelected(true)}
      />
    </div>
  );
}

export default Dashboard;
