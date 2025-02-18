"use client";

import React, { useEffect, useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const templateSlug = params?.["template-slug"];
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt || "";
    const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    const responseText = await result.response.text();
    console.log(responseText);
    setAiOutput(responseText);
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug,result?.response.text());
    setLoading(false);
  };

  const SaveInDb = async (formData: any, slug: string | undefined, aiResponse: string) => {
    if (!user?.primaryEmailAddress?.emailAddress || !slug) return;
    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: slug,
      aiResponse: aiResponse,
      createdBy: user.primaryEmailAddress.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log("Saved in DB: ", result);
  };

  useEffect(() => {
    if (templateSlug) {
      const template = Templates?.find((item) => item.slug === templateSlug);
      setSelectedTemplate(template);
    }
  }, [templateSlug]);

  return (
    <div className="p-10">
      <div className="flex justify-start mb-4">
        <Link href={"/dashboard"}>
          <Button>
            <ArrowLeft />
            Back
          </Button>
        </Link>
      </div>
      <div style={{ fontFamily: "cursive" }} className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
