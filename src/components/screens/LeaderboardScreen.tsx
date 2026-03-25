import { MapPin } from "lucide-react";

const tabs = [
  { label: "Mi Ciudad", active: true },
  { label: "Nacional", active: false },
  { label: "Amigos", active: false },
];

const podiumPlayers = [
  {
    rank: 2,
    name: "Miguel S.",
    score: 94,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    borderColor: "#C0C0C0",
  },
  {
    rank: 1,
    name: "Andrés R.",
    score: 97,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    borderColor: "#FFD700",
    crown: true,
  },
  {
    rank: 3,
    name: "Diego L.",
    score: 91,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    borderColor: "#CD7F32",
  },
];

const rankingRows = [
  { rank: 4, name: "Carlos M.", position: "DEL", score: 89, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
  { rank: 5, name: "Roberto G.", position: "MID", score: 88, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  { rank: 6, name: "Luis H.", position: "DEF", score: 87, avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80" },
  { rank: 7, name: "Fernando P.", position: "MID", score: 85, avatar: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&q=80" },
  { rank: 8, name: "Javier T.", position: "DEL", score: 84, avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=100&q=80" },
  { rank: 9, name: "Ricardo N.", position: "DEF", score: 83, avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80" },
  { rank: 10, name: "Emilio V.", position: "POR", score: 82, avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80" },
];

const meRow = {
  rank: 41,
  name: "Tú",
  position: "MID",
  score: 78,
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  isMe: true,
};

export function LeaderboardScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Header */}
      <div className="flex items-center justify-between px-5 h-[44px] shrink-0">
        <h1 className="text-[28px] font-bold text-[var(--text-primary)]">
          Rankings
        </h1>
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <MapPin size={14} color="var(--accent)" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-[var(--text-primary)]">
            Puebla
          </span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-0 mx-4 mt-3 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className="flex-1 pb-2.5 text-center text-[14px] font-semibold transition-colors"
            style={{
              color: tab.active ? "var(--accent)" : "var(--text-secondary)",
              borderBottom: tab.active
                ? "2px solid var(--accent)"
                : "2px solid var(--border)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Podium */}
        <div className="flex items-end justify-center gap-3 px-4 mt-5 mb-4">
          {podiumPlayers.map((player) => {
            const isFirst = player.rank === 1;
            const avatarSize = isFirst ? 72 : 56;
            return (
              <div
                key={player.rank}
                className="flex flex-col items-center"
                style={{ marginBottom: isFirst ? 0 : 0 }}
              >
                {/* Crown for #1 */}
                {player.crown && (
                  <span className="text-[20px] mb-1">👑</span>
                )}

                {/* Avatar */}
                <div
                  className="rounded-full overflow-hidden shrink-0"
                  style={{
                    width: avatarSize,
                    height: avatarSize,
                    border: `3px solid ${player.borderColor}`,
                  }}
                >
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rank badge */}
                <div
                  className="flex items-center justify-center w-[24px] h-[24px] rounded-full -mt-3 text-[12px] font-bold z-10"
                  style={{
                    backgroundColor: player.borderColor,
                    color:
                      player.rank === 1 ? "#000000" : "var(--text-primary)",
                  }}
                >
                  {player.rank}
                </div>

                {/* Name */}
                <span className="text-[13px] font-semibold text-[var(--text-primary)] mt-1.5">
                  {player.name}
                </span>

                {/* Score */}
                <span
                  className="text-[15px] font-bold"
                  style={{
                    color:
                      player.rank === 1
                        ? "var(--gold)"
                        : "var(--text-secondary)",
                  }}
                >
                  {player.score}
                </span>
              </div>
            );
          })}
        </div>

        {/* Ranking list */}
        <div className="mx-4 rounded-2xl overflow-hidden border border-[var(--border)]">
          {rankingRows.map((row, idx) => (
            <RankRow
              key={row.rank}
              rank={row.rank}
              name={row.name}
              position={row.position}
              score={row.score}
              avatar={row.avatar}
              isAlt={idx % 2 === 1}
            />
          ))}

          {/* Dots separator */}
          <div
            className="flex items-center justify-center py-2"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <span className="text-[14px] text-[var(--text-secondary)] tracking-[4px]">
              •••
            </span>
          </div>

          {/* Me row */}
          <RankRow
            rank={meRow.rank}
            name={meRow.name}
            position={meRow.position}
            score={meRow.score}
            avatar={meRow.avatar}
            isMe
          />
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>

    </div>
  );
}

/* ---- Rank Row ---- */

function RankRow({
  rank,
  name,
  position,
  score,
  avatar,
  isAlt = false,
  isMe = false,
}: {
  rank: number;
  name: string;
  position: string;
  score: number;
  avatar: string;
  isAlt?: boolean;
  isMe?: boolean;
}) {
  const bgColor = isMe
    ? "rgba(0,255,133,0.06)"
    : isAlt
      ? "#111113"
      : "var(--surface)";

  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5"
      style={{
        backgroundColor: bgColor,
        borderLeft: isMe ? "3px solid var(--accent)" : "3px solid transparent",
      }}
    >
      {/* Rank number */}
      <span
        className="text-[14px] font-bold w-[28px] text-center shrink-0"
        style={{
          color: isMe ? "var(--accent)" : "var(--text-secondary)",
        }}
      >
        {rank}
      </span>

      {/* Avatar */}
      <div
        className="w-[40px] h-[40px] rounded-full overflow-hidden shrink-0"
        style={{
          border: isMe
            ? "2px solid var(--accent)"
            : "2px solid var(--border)",
        }}
      >
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Position */}
      <div className="flex flex-col flex-1 min-w-0">
        <span
          className="text-[14px] font-semibold truncate"
          style={{
            color: isMe ? "var(--accent)" : "var(--text-primary)",
          }}
        >
          {name}
        </span>
        <div className="flex items-center gap-1.5">
          {isMe ? (
            <span
              className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded"
              style={{
                color: "var(--accent)",
                backgroundColor: "rgba(0,255,133,0.12)",
              }}
            >
              {position}
            </span>
          ) : (
            <span className="text-[12px] text-[var(--text-secondary)]">
              {position}
            </span>
          )}
        </div>
      </div>

      {/* Score */}
      <span
        className="text-[16px] font-bold shrink-0"
        style={{
          color: isMe ? "var(--accent)" : "var(--text-primary)",
        }}
      >
        {score}
      </span>
    </div>
  );
}
