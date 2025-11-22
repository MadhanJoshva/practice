import { CheckCircleIcon,XCircleIcon } from "@heroicons/react/16/solid";
import { useState, useMemo } from "react";

// PasswordStrengthInput.jsx
// A self-contained React component (Tailwind CSS) that shows
// - live password strength meter
// - checklist of rules (length, uppercase, lowercase, number, symbol)
// - show/hide toggle
// - copy button
// - visual colored bar and score

export default function PasswordStrengthInput() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  // Rule checks
  const checks = useMemo(() => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[^A-Za-z0-9]/.test(password),
    };
  }, [password]);

  // Score from 0..100
  const score = useMemo(() => {
    const weights = {
      length: 30,
      uppercase: 15,
      lowercase: 15,
      number: 20,
      symbol: 20,
    };
    let s = 0;
    Object.keys(checks).forEach((k) => {
      if (checks[k]) 
        s += weights[k];
    });

    // Soft boost for long passwords
    if (password.length >= 12) s = Math.min(100, s + 5);
    return s;
  }, [checks, password.length]);

  // Strength label & color
  const strength = useMemo(() => {
    if (score >= 85) return { label: "Very Strong", color: "bg-green-500" };
    if (score >= 65) return { label: "Strong", color: "bg-lime-500" };
    if (score >= 40) return { label: "Medium", color: "bg-yellow-400" };
    if (score > 0) return { label: "Weak", color: "bg-orange-400" };
    return { label: "", color: "bg-gray-300" };
  }, [score]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      // small visual feedback: we'll use alert for simplicity
      alert("Password copied to clipboard");
    } catch (e) {
      alert("Copy failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
      <div className="relative">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={visible ? "text" : "password"}
          placeholder="Enter a secure password"
          className="w-full px-4 py-2 pr-28 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="px-3 py-1 text-sm rounded-md border border-gray-200 hover:bg-gray-100"
          >
            {visible ? "Hide" : "Show"}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1 text-sm rounded-md border border-gray-200 hover:bg-gray-100"
            disabled={!password?"text-gray-600":""}
          >
            Copy
          </button>
        </div>
      </div>

      {/* Strength bar & label */}
      <div className="mt-3">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`${strength.color} h-full rounded-full transition-all duration-300`}
            style={{ width: `${score}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2 text-sm">
          <div className="text-gray-600">{strength.label}</div>
          <div className="text-gray-500">{score}%</div>
        </div>
      </div>

      {/* Checklist */}
      <ul className="mt-4 space-y-2 text-sm">
        <li className={`flex items-center gap-2 ${checks.length ? "text-green-600" : "text-gray-600"}`}>

            {checks.length ? (
                <CheckCircleIcon className="w-4 h-4 text-green-500"/>
            ) : (
                 <XCircleIcon className="w-4 h-4 text-gray-600"/>
            )}
          
          <span>At least 8 characters</span>
        </li>

        <li className={`flex items-center gap-2 ${checks.uppercase ? "text-green-600" : "text-gray-600"}`}>

            {checks.uppercase ? (
             <CheckCircleIcon  className="w-8 h-8 text-green-600 "/>
            ) : (
              <XCircleIcon className="w-4 h-4 text-gray-600"/>
            )}
          
          <span>Uppercase letter (A–Z)</span>
        </li>

        <li className={`flex items-center gap-2 ${checks.lowercase ? "text-green-600" : "text-gray-600"}`}>
        
            {checks.lowercase ? (
             <CheckCircleIcon className="w-4 h-4 text-green-600 "/>
            ) : (
             <XCircleIcon className="w-4 h-4 text-gray-600"/>
            )}
        
          <span>Lowercase letter (a–z)</span>
        </li>

        <li className={`flex items-center gap-2 ${checks.number ? "text-green-600" : "text-gray-600"}`}>
          
            {checks.number ? (
              <CheckCircleIcon className="w-4 h-4 text-green-600" />
            ) : (
              <XCircleIcon className="w-4 h-4 text-gray-600"/>
            )}
          
          <span>Number (0–9)</span>
        </li>

        <li className={`flex items-center gap-2 ${checks.symbol ? "text-green-600" : "text-gray-600"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${checks.symbol ? "opacity-100" : "opacity-40"}`} viewBox="0 0 20 20" fill="currentColor">
            {checks.symbol ? (
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
            ) : (
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
            )}
          </svg>
          <span>Symbol (e.g. @ # $ %)</span>
        </li>
      </ul>

      {/* Tips */}
      <div className="mt-4 text-xs text-gray-500">
        Tip: use a long passphrase (12+ chars) and mix letters, numbers & symbols.
      </div>
    </div>
  );
}
