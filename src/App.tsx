import React, { useState } from 'react';
import Header from './components/Header';
import Abstract from './components/Abstract';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import ResearchBackground from './components/ResearchBackground';
import ResearchSignificance from './components/ResearchSignificance';
import VersionAnalysisSection from './components/VersionAnalysisSection';
import ResearchMethods from './components/ResearchMethods';
import Conclusion from './components/Conclusion';
import { versionDetails } from './components/versionData';

function App() {
  const [selectedVersionId, setSelectedVersionId] = useState<string>(versionDetails[0].id);

  const handleVersionSelect = (id: string) => {
    setSelectedVersionId(id);
    const element = document.getElementById('version-analysis');
    if (element) {
      // The section is targeted by an id
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <Header />
        <main className="mt-16 space-y-16">
          <Abstract />
          <ResearchBackground />
          <ResearchSignificance />
          <ResearchMethods />
          <TimelineSection onVersionSelect={handleVersionSelect} />
          <VersionAnalysisSection selectedVersionId={selectedVersionId} onVersionSelect={handleVersionSelect} />
          <Conclusion />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;