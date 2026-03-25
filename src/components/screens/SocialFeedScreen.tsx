import {
  Search,
  Plus,
  Heart,
  MessageCircle,
  Swords,
  Play,
} from "lucide-react";

const feedTabs = ["Siguiendo", "Tu ciudad", "Nacional"] as const;
const activeFeedTab = "Siguiendo";

type Story = {
  name: string;
  img: string;
  isUpload?: boolean;
  hasNew?: boolean;
};

const stories: Story[] = [
  {
    name: "Subir",
    img: "",
    isUpload: true,
  },
  {
    name: "Carlos",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    hasNew: true,
  },
  {
    name: "Mar\u00eda",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    hasNew: true,
  },
  {
    name: "Andr\u00e9s",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    hasNew: false,
  },
  {
    name: "Luis",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    hasNew: false,
  },
];

export function SocialFeedScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Title bar */}
      <div className="flex items-center px-5 h-[44px] shrink-0">
        <h1 className="text-[24px] font-bold text-[var(--text-primary)]">
          Comunidad
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Search bar */}
        <div className="px-4 mb-4">
          <div className="flex items-center gap-2.5 h-[40px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-3.5">
            <Search size={16} color="var(--text-secondary)" strokeWidth={1.5} />
            <span className="text-[14px] text-[var(--text-secondary)]">
              Buscar jugadores o retos...
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-5 px-5 mb-4">
          {feedTabs.map((tab) => {
            const isActive = tab === activeFeedTab;
            return (
              <button
                key={tab}
                className="text-[14px] transition-colors pb-1 relative"
                style={{
                  color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {tab}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stories row */}
        <div className="flex items-start gap-3.5 px-4 mb-5 overflow-x-auto">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col items-center gap-1.5 shrink-0"
              style={{ width: 60 }}
            >
              {story.isUpload ? (
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                  style={{
                    border: "2px solid var(--accent)",
                    backgroundColor: "rgba(0,255,133,0.06)",
                  }}
                >
                  <Plus size={24} color="var(--accent)" strokeWidth={2} />
                </div>
              ) : (
                <div
                  className="w-[56px] h-[56px] rounded-full overflow-hidden p-[2px]"
                  style={{
                    background: story.hasNew
                      ? "var(--accent)"
                      : "var(--border)",
                  }}
                >
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-full h-full rounded-full object-cover"
                    style={{ border: "2px solid var(--bg)" }}
                  />
                </div>
              )}
              <span className="text-[11px] text-[var(--text-secondary)] text-center leading-tight">
                {story.name}
              </span>
            </div>
          ))}
        </div>

        {/* Feed post */}
        <div className="mx-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
          {/* Post header */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            <div className="w-[36px] h-[36px] rounded-full overflow-hidden shrink-0 bg-[var(--surface-elevated)]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                alt="pablo_gzz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                  @pablo_gzz
                </span>
                <span
                  className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,255,133,0.1)",
                  }}
                >
                  DEF
                </span>
              </div>
              <span className="text-[11px] text-[var(--text-secondary)]">
                hace 1h
              </span>
            </div>
          </div>

          {/* Video thumbnail */}
          <div className="relative w-full h-[220px] bg-[var(--surface-elevated)]">
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80"
              alt="Soccer video"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
              }}
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--overlay)" }}
              >
                <Play
                  size={22}
                  color="var(--text-primary)"
                  fill="var(--text-primary)"
                  strokeWidth={0}
                />
              </div>
            </div>
          </div>

          {/* Reactions row */}
          <div className="flex items-center gap-5 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <Heart
                size={18}
                color="var(--error)"
                fill="var(--error)"
              />
              <span className="text-[13px] text-[var(--text-secondary)]">
                89
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle
                size={18}
                color="var(--text-secondary)"
                strokeWidth={1.5}
              />
              <span className="text-[13px] text-[var(--text-secondary)]">
                12
              </span>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <Swords
                size={16}
                color="var(--accent)"
                strokeWidth={1.5}
              />
              <span className="text-[13px] font-semibold text-[var(--accent)]">
                Retar
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
